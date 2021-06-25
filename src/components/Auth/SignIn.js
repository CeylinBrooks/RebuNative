import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Redirect } from 'react-router-native';
import { SiteContext } from './context.js';
import axios from 'axios';

export default function SignIn() {

  const context = useContext(SiteContext);

  const [userInput, setUserInput] = useState(null);

  let handleUserName = (e, name) => {
    setUserInput({ username: e });
  }

  let handlePassword = (e, name) => {
    setUserInput({ ...userInput, password: e });
  }

  let handleSubmit = async (e) => {
    let username = userInput.username;
    let password = userInput.password;


    // const api = 'https://brsmith-auth-api.herokuapp.com/signin';
    const api = 'http://localhost:3333/signin';
    await axios({

      method: 'post',
      url: api,
      auth: {
        username, password
      },
      headers: {},
    }).then(response => {
      context.setUser(response.data.user);
      context.setToken(response.data.token);
      context.setIsAuthenticated(true);
    }).catch((e) => console.error(e));
  }

  return (
    <View>

      <TextInput
        textContentType='username'
        onChangeText={(e) => handleUserName(e, 'username')}
        placeholder='username'
        autoCapitalize="none"
        style={styles.input}
      />

      <TextInput
        textContentType='password'
        onChangeText={(e) => handlePassword(e, 'password')}
        placeholder='password'
        autoCapitalize="none"
        style={styles.input}
      />

      <TouchableOpacity 
      onPress={handleSubmit} 
      title='Sign In'
      style={styles.button}
      >
        <Text style={{color: "#00a88a", fontSize: 16}}>Sign in</Text>
      </TouchableOpacity>
      {context.isAuthenticated ?
        <Redirect
          to={{
            pathname: "/dashboard",

          }}
        />
        : null}
    </View>

  )
}

const styles = StyleSheet.create({
  input: {
    color: "black",
    backgroundColor: "white",
    width: 250,
    borderRadius: 5,
    fontSize: 16,
    paddingLeft: 5,
    height: 40,
    margin: "auto",
    marginBottom: 20,
    borderColor: '#7a42f4',
  },
  button: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 6,
    marginBottom: 80,
    alignItems: "center",
    width: 250,
  },
})