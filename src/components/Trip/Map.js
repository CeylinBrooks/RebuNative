import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

export default function Map() {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [region, setRegion] = useState(null);
  const [marker, setMarker] = useState(null);
  const [mapView, setMapView] = useState(null);

  const origin = { latitude: 37.3318456, longitude: -122.0296002 };
  const destination = { latitude: 37.771707, longitude: -122.4053769 };
  const GOOGLE_MAPS_APIKEY = 'AIzaSyBtLbow5RiE2qmYmc1iqRcQnKnqfLZalKo';


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setRegion({ latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.0421, longitudeDelta: 0.0421 });
      setMarker({ latitude: location.coords.latitude, longitude: location.coords.longitude });
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
      <MapView
        style={styles.map}
        region={region}
        ref={c => { setMapView(c) }}
      >
        <Marker coordinate={origin} />
        <Marker coordinate={destination} />
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="#00a88a"
        // onReady={result => {
        //   console.log(mapView);
        //   console.log(`Distance: ${result.distance} km`);
        //   console.log(`Duration: ${result.duration} min.`);
        //   mapView.fitToCoordinates(result.coordinates, {
        //     edgePadding: {
        //       right: 20,
        //       bottom: 20,
        //       left: 20,
        //       top: 20
        //     }
        //   });
        // }}
        />
      </MapView>
      // <Text>{text}</Text>
      // <StatusBar style="auto" />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00a88a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontFamily: "Helvetica",
    fontSize: 40,
    color: "#fff",
  },
  map: {
    width: "90%",
    height: "50%",
  },
});
