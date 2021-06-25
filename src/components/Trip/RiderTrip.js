import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Link, Redirect } from "react-router-native";
import { SiteContext } from "../Auth/context";
import axios from "axios";
import Map from "./Map";
import Modal from "./modal.js";
import exit from "../../../assets/exit.png";

export default function RiderTrip() {
  const context = useContext(SiteContext);

  console.log('line 13',context);
  

  // query the db for updates to the trip data
  let update = async () => {
    const api = `https://brsmith-auth-api.herokuapp.com/api/v1/trips/${context.trip._id}`;
    // const api = `http://localhost:3333/api/v1/trips/${context.trip._id}`;
    await axios({
      method: "get",
      url: api,

      headers: { 'Content-Type': 'application/json' },
    }).then(response => {
      context.setTrip(response.data);
      console.log('this is the response', response.data);
    }).catch(e => console.error(e))
  }
  

  // While on trip page, query DB every 5 sec for trip updates
  useEffect(() => {
    const updater = setInterval(() => {
      update();
    }, 5000);
    
    // clear interval when component unmounts (!)
    return () => clearInterval(updater);
  });
  
  // below are props for Map component: 
  console.log('line 39' , context.trip);
  const origin = context.trip.start_loc ? context.trip.start_loc : {};
  const destination = context.trip.end_loc ? context.trip.end_loc : {};

  return (
    <View style={styles.container}>
      <Link to={"/"}>
        <Image style={styles.exitImg} source={exit} />
      </Link>
      <View style={styles.modals}>
        {context.trip.accept_time !== "null" ? (
          <Modal message="Driver is on the way" />
        ) : null}
        {context.trip.pickup_time !== "null" ? (
          <Modal message="Driver has arrived" />
        ) : null}
        {context.trip.dropoff_time !== "null" ? (
          <Modal
            reset={true}
            message="You trip has ended. Please exit the vehicle."
          />
        ) : null}
        {context.trip.dropoff_time !== "null" ? (
          <Link to={"/"}>
            <Text> {">"} go Home</Text>
          </Link>
        ) : null}
      </View>
      <Text style={styles.logo}>Current Trip</Text>
      <Map origin={origin} destination={destination} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00a88a",
    alignItems: "center",
    // justifyContent: "center",
    width: "100%",
    padding: 10,
  },
  logo: {
    fontFamily: "Helvetica",
    fontSize: 40,
    color: "#fff",
    marginBottom: 20,
  },
  modals: {
    height: 0,
    flex: 0,
  },
  exitImg: {
    width: 35,
    height: 35,
    alignSelf: "flex-start",
    margin: 20,
  },
});
