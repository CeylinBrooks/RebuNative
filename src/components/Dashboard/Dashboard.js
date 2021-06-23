import React, { useContext, useState } from 'react';
import { ScrollView, Text, StyleSheet, View, TextInput, Button, FlatList, Image, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { SiteContext } from '../Auth/context';

export default function Dashboard() {

  // Set global context with form data TODO: user sessions
  const context = useContext(SiteContext);

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const Item = ({ title }) => (
    <Text>{title}</Text>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <View style={styles.wrapContainer}>
      <Link to={"/"}>
        <Image
          style={styles.exitImg}
          source={require('./exit.png')} />
      </Link>
      <Link to={"/profile"}>
        <Image
          style={styles.exitImg}
          source={require('./profile.png')} />
      </Link>
      {/* <View style={styles.inputContainer}> */}
      <Text style={styles.formLabel}>Rider Dashboard</Text>
      <GooglePlacesAutocomplete
        placeholder="Pick up location"
        query={{
          key: 'AIzaSyBtLbow5RiE2qmYmc1iqRcQnKnqfLZalKo',
          language: 'en',
        }}
        onPress={(data, details = null) => console.log(data.description)}
        onPress={(data, details = null) => context.setOrigin(data.description)}
        onFail={(error) => console.error(error)}
      // currentLocation={true}
      />
      <GooglePlacesAutocomplete
        placeholder="Where are you going?"
        query={{
          key: 'AIzaSyBtLbow5RiE2qmYmc1iqRcQnKnqfLZalKo',
          language: 'en',
        }}
        onPress={(data, details = null) => console.log(data.description)}
        onPress={(data, details = null) => context.setDestination(data.description)}
        onFail={(error) => console.error(error)}
      />
      <TouchableOpacity>
        <Link to={"/trip"} style={styles.button}
        // TODO: this button should update the database with new trip object
        >
          <Text>
            Schedule pickup
          </Text>
        </Link>
      </TouchableOpacity>
      <ScrollView>
        <Text style={styles.text}>Your previous trips:</Text>
        <Text
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        ></Text>

      </ScrollView>
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
  inputStyle: {
    width: "90%",
    height: 50,
    color: '#5d5d5d',
    fontSize: 16,
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
    width: 35,
    height: 35,
    alignSelf: 'flex-end',
    marginTop: 20
  },
  text: {
    fontSize: 25,
    marginBottom: 15
  }
});