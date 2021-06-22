import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';


// Directions vars
const GOOGLE_MAPS_APIKEY = 'AIzaSyBtLbow5RiE2qmYmc1iqRcQnKnqfLZalKo'; // this needs to go in .env

export default class Map extends Component {
  constructor(props) {
    super(props);

    // State
    this.state = {
      location: null,
      errorMsg: null,
      region: null,
      origin: props.origin,
      destination: props.destination,
      distance: null,
      duration: null,
    };

    this.mapView = null;
  }

  // Get current user location upon load
  componentDidUpdate() {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      this.setState({ location: location });
    });
  }

  // let text = 'Waiting..';
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (location) {
  //   text = JSON.stringify(location);
  // };

  render() {
    return (
      <View style={styles.view} >
        <MapView
          style={styles.map}
          region={this.state.region}
          showsUserLocation={true}
          ref={ref => { this.mapView = ref }}
          loadingEnabled={true}
          loadingBackgroundColor={'#00a88a'}
        >
          <Marker coordinate={this.state.origin} />
          <Marker coordinate={this.state.destination} />
          <MapViewDirections
            origin={this.state.origin}
            destination={this.state.destination}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={5}
            strokeColor="#00a88a"
            onReady={result => {
              console.log(`Distance: ${result.distance} km`);
              console.log(`Duration: ${result.duration} min.`);
              this.setState({ distance: result.distance, duration: result.duration });
              this.mapView.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: 20,
                  bottom: 20,
                  left: 20,
                  top: 20
                }
              });
            }}
          />
        </MapView>
        <Text style={styles.text}>Distance: {Math.round(this.state.distance)} km</Text>
        <Text style={styles.text}>Duration: {Math.round(this.state.duration)} min</Text>
        {/* pricing is arbitray for demo */}
        <Text style={styles.text}>Estimated Cost: ${Math.round(this.state.duration * this.state.distance / 30)}</Text> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    width: "100%",
    height: "70%",
    alignItems: "center"
  },
  map: {
    width: "90%",
    height: "80%",
    borderRadius: 6
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  }
});
