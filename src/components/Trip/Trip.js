import React, { useContext } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { Link } from 'react-router-native';
import { SiteContext } from '../Auth/context';
import axios from 'axios';
import Map from './Map';
import Modal from './modal.js';

export default function Trip() {
  // TODO: pull lat/long from trip object (in state? or DB) to feed map
  const context = useContext(SiteContext);
  
  // below are props for Map component: 
  const origin = context.origin; // these will come from database trip item
  const destination = context.destination;
  console.log('this is context from TRIP',context);

  // query the db for updates to the trip data
  setTimeout(() => {
    const api = 'http://localhost:3333/api/v1/trips';
    axios({
      method: 'get',
      url: api,
      data: {
        // TODO: do we need to send the trip id as data or as a param
      },
      headers: { 'Content-Type': 'application/json' },
    }).then(response => {
      console.log('this is the response', response.data);
    }, 5000)
  })

  return (
    <View style={styles.container}>
      {/* {context.trip.accept_time ?
        <Modal
          message="Driver is on the way" />
        : null}
      {context.trip.pickup_time ?
        <Modal
          message="Driver has arrived" />
        : null}
      {context.trip.dropoff_time ?
        <Link to={"/dashboard"}>
          <Modal
            message="You trip has ended. Please exit the vehicle." />
        </Link>
        : null} */}
      <Link to={"/"}>
        <Text> {'>'} go Home</Text>
      </Link>
      <Text style={styles.logo}>Current Trip</Text>
      {/* Display pickup button only for Drivers */}
      {context.role === 'driver' ?
        <Button title="Pick Up Passenger" onPress={null} />
        :
        null}
      <Map origin={origin} destination={destination} />
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
});
