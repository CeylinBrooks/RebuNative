import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Redirect } from 'react-router-native';
import { SiteContext } from '../Auth/context';
import axios from 'axios';
import Map from './Map';

export default function DriverTrip() {
  const context = useContext(SiteContext);
  const [complete, setComplete] = useState(false);
  const origin = context.trip.start_loc;
  const destination = context.trip.end_loc;

  let pickup = async () => {
    const api = 'https://brsmith-auth-api.herokuapp.com/api/v1/trips';
    //  const api = 'http://localhost:3333/api/v1/trips';
    await axios({
      method: 'put',
      url: `${api}/${context.trip._id}`,
      mode: 'cors',
      cache: 'no-cache',
      data: {
        pickup_time: new Date()
      },
      headers: {},
    }).then(response => {
      console.log('____Response data____', response.data);
      if (response.status !== 500) {
        context.setTrip(response.data);
      }
      if (response.status === 500) {
        Alert.alert(
          "Error",
          "Please choose another username.", [{ text: "OK" }]
        )
      }
    })
      .catch((e) => console.error(e))
  }

  let dropOff = async () => {
    const api = 'https://brsmith-auth-api.herokuapp.com/api/v1/trips';
    // const api = 'http://localhost:3333/api/v1/trips';
    await axios({
      method: 'put',
      url: `${api}/${context.trip._id}`,
      mode: 'cors',
      cache: 'no-cache',
      data: {
        dropoff_time: new Date(),
      },
      headers: {},
    }).then(response => {
      console.log('____Response data____', response.data);
      if (response.status !== 500) {
        setComplete(true);
        context.setTrip(null);
      }
      if (response.status === 500) {
        Alert.alert(
          "Error",
          "Please choose another username.", [{ text: "OK" }]
        )
      }
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Current Trip</Text>
      {context.trip.pickup_time === "null" ?
        <TouchableOpacity onPress={pickup} style={styles.button}><Text style={{ color: "#00a88a" }}>Pick up Passenger</Text></TouchableOpacity> :
        <TouchableOpacity onPress={dropOff} style={styles.button}><Text style={{ color: "#00a88a" }}>Drop off Passenger</Text></TouchableOpacity>
      }
      <Map origin={origin} destination={destination} />
      {complete === true ?
        <Redirect to={{
          pathname: '/'
        }} />
        : null}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00a88a',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
  },
  logo: {
    fontFamily: "Helvetica",
    fontSize: 40,
    color: "#fff",
    marginBottom: 20,
  },
  button: {
    padding: 15,
    backgroundColor: "white",
    borderRadius: 6,
    alignItems: "center",
    width: 250,
    marginBottom: 20,
  },
});
