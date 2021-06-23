import { View, StyleSheet, Text} from 'react-native';
import React from 'react';

import Map from './Map';

// below are props for Map component: 
// TODO: pull lat/long from trip object (in state? or DB) to feed map
const origin = { latitude: 37.3318456, longitude: -122.0296002 }; // these will come from database trip item
const destination = { latitude: 37.771707, longitude: -122.4053769 };

export default function Trip() {
  return (
    <View style={styles.container}>
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
