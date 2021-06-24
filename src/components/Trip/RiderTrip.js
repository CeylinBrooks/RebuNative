import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { Link } from 'react-router-native';
import { SiteContext } from '../Auth/context';
import axios from 'axios';
import Map from './Map';
import Modal from './modal.js';

export default function RiderTrip() {

  const context = useContext(SiteContext);


  // below are props for Map component: 
  const origin = context.origin; // these will come from database trip item
  const destination = context.destination;
  console.log('trip _id:', context.trip);

  // query the db for updates to the trip data
  let updater = async () => {
    const api = `http://localhost:3333/api/v1/trips/${context.trip._id}`;
    await axios({
      method: 'get',
      url: api,
      headers: { 'Content-Type': 'application/json' },
    }).then(response => {
      context.setTrip(response.data);
      console.log('this is the response', response.data);
    }).catch(e => console.error(e))
  }

  return (
    <View style={styles.container}>
      {context.trip.accept_time !== 'null' ?
        <Modal
          message="Driver is on the way" />
        : null}
      {context.trip.pickup_time !== 'null' ?
        <Modal
          message="Driver has arrived" />
        : null}
      {context.trip.dropoff_time!== 'null' ?
          <Modal
            message="You trip has ended. Please exit the vehicle." />
        : null}
      <Link to={"/"}>
        <Text> {'>'} go Home</Text>
      </Link>
      <Text style={styles.logo}>Current Trip</Text>
      <Button title="get trip updates" onPress={updater} />
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
