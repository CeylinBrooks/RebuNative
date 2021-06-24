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
        <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.buttonText}>
              Save Changes
            </Text>
         </TouchableOpacity>
      </View>
      <Link to={"/payment"} style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Add a payment</Text>
      </Link>
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
  buttonStyle: {
    marginTop: 30,
    marginLeft : "20%",
    height: 45,
    width : "50%",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
    color: "#00a88a"
},
buttonText:{
  color: '#00a88a',
  fontWeight: "600"
},
});