import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
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
      context.setIsAuthenticated(true);
      context.setUser(response.data.user);
      context.setToken(response.data.token);
    }).catch((e) => console.error(e));
  }

  return (
    <View>

      <TextInput
        textContentType='username'
        onChangeText={(e) => handleUserName(e, 'username')}
        placeholder='username'
        autoCapitalize="none"

      />

      <TextInput
        textContentType='password'
        onChangeText={(e) => handlePassword(e, 'password')}
        placeholder='password'
        autoCapitalize="none"
      />

      <Button onPress={handleSubmit} title='Sign In' />
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