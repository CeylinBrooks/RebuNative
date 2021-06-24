import React from 'react';
import {Text, StyleSheet, View, TextInput, Button, FlatList, Image, TouchableOpacity} from 'react-native';
import { Link } from 'react-router-native';

export default function DriverDash() {

  const queue = [];

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
    <View >
        <Link to={"/"}>
          <Image 
          style={styles.exitImg}
          source={require('./exit.png')} />
        </Link>
        <View style={styles.inputContainer}>
        <Text style={styles.formLabel}>Driver Dashboard</Text>
        <TouchableOpacity onPress={handleGetTrip}>
            <Text style = {styles.button}>
              Schedule pickup
            </Text>
         </TouchableOpacity>
        </View>
        <Text style = {styles.text}>Your past trips:</Text>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            />
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