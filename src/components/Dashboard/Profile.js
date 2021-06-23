import React from 'react';
import {Text, StyleSheet, View, ScrollView, Button, TextInput, Image, TouchableOpacity} from 'react-native';
import { Link } from 'react-router-native';

export default function Profile() {
  return (
    <ScrollView>
      <Link to={"/dashboard"}>
          <Image 
          style={styles.exitImg}
          source={require('./back.png')} />
        </Link>
        <View>
        <Text style={styles.formLabel}>Settings</Text>
        </View>
        <View>
        <TextInput placeholder="Username" style={styles.inputStyle} />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          style={styles.inputStyle}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="Email"
          style={styles.inputStyle}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="Phone Number"
          style={styles.inputStyle}
        />
        <TouchableOpacity>
            <Text style = {styles.button}>
              Save Changes
            </Text>
         </TouchableOpacity>
        {/* <Button title="Save Changes" color="black" /> */}
      </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },

  formLabel: {
    fontSize: 20,
    color: '#fff',
    alignSelf: "center",
    marginTop: 30
  },
  inputStyle: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#DCDCDC',
  },
  formText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  button: {
    borderWidth: 2,
    padding: 15,
    backgroundColor: 'white',
    alignSelf: 'center',
    color: "#00a88a",
    borderColor: "#00a88a",
    marginTop: 20,
    // borderRadius: 15
 }
});