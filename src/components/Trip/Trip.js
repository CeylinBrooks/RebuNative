import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Link } from 'react-router-native';
import { SiteContext } from '../Auth/context';

import Map from './Map';


export default function Trip() {
  
  // below are props for Map component: 
  // TODO: pull lat/long from trip object (in state? or DB) to feed map
  const context = useContext(SiteContext);

  const origin = context.origin; // these will come from database trip item
  const destination = context.destination;
  console.log(context);

  return (
    <View style={styles.container}>
      <Link to={"/"}>
        <Text> {'>'} go Home</Text>
      </Link>
      <Text style={styles.logo}>Curent Trip</Text>
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
