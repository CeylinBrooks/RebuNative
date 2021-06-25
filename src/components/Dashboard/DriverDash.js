import React, { useContext, useEffect } from 'react';
import { SiteContext } from '../Auth/context.js'
import { Alert, Text, StyleSheet, View, TextInput, Button, FlatList, Image, TouchableOpacity } from 'react-native';
import { Link, Redirect } from 'react-router-native';
import axios from 'axios';
import exit from '../../../assets/exit.png';

export default function DriverDash() {
  const context = useContext(SiteContext);


  // TODO: send get request to trips and find the oldest trip that has not been accepted. 
  const handleGetTrip = async () => {
    const api = 'https://brsmith-auth-api.herokuapp.com/api/v1/trips';
    // const api = 'http://localhost:3333/api/v1/trips';
    await axios ({
      method: 'get',
      url: api,
      mode: 'cors',
      cache: 'no-cache',
      headers: {},
    }).then(response => {
      console.log(response.data);
      if (response.status !== 500) {
        let openTrips = response.data.filter((trip) => trip.accept_time === "null");
        console.log('___OpenTrips[0]____', openTrips[0]);
        setTrip(openTrips[0]);
      }
      if (response.status === 500) {
        Alert.alert(
          "Error",
          "Please choose another username.", [{text: "OK"}]
        )
      }
    })
  }

  const setTrip = async (trip) => {
    const api = 'https://brsmith-auth-api.herokuapp.com/api/v1/trips';
    // const api = 'http://localhost:3333/api/v1/trips';
    await axios ({
      method: 'put',
      url: `${api}/${trip._id}`,
      mode: 'cors',
      cache: 'no-cache',
      data: {
        accept_time: new Date(),
        driver_id: context.user._id,
      },
      headers: { },
    }).then(response => {
      console.log(response.data);
      if (response.status !== 500) {
        context.setTrip(response.data);

      }
      if (response.status === 500) {
        Alert.alert(
          "Error",
          "Please choose another username.", [{text: "OK"}]
        )
      }
    })
  }

  const Item = ({ title }) => (
      <Text>{title}</Text>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <View >
        <Link to={"/"}>
          <Image 
          style={styles.exitImg}
          source={exit} />
        </Link>
        <View style={styles.inputContainer}>
        <Text style={styles.formLabel}>Driver Dashboard</Text>
        <TouchableOpacity onPress={handleGetTrip}>
            <Text style = {styles.button}>
              Schedule pickup
            </Text>
         </TouchableOpacity>
        </View>
        {context.trip ?
        <Redirect
          to={{
            pathname: "/trip",
          }}
        />
        : null}
      </View>
  
    )
}



const styles = StyleSheet.create({
  wrapContainer: {
    marginTop: 50
  },
  inputContainer: {
    flexDirection: "column",
    height: 300,
    padding: 20,
    marginTop: 50
  },
  formLabel: {
    fontSize: 30,
    marginBottom: 20,
    color: '#fff',
    fontWeight: 'bold'
  },
  button: {
    borderWidth: 1,
    padding: 15,
    backgroundColor: 'white',
    alignSelf: 'center',
    color: "#00a88a",
    borderColor: "#00a88a",
    marginBottom: 20
 },
  exitImg: {
    width: 40,
    height: 40,
    alignSelf: 'flex-end',
    marginTop: 20
  },
  text: {
    fontSize: 25,
    marginBottom: 15
  }
  
});