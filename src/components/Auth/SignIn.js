import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
// import Base64 from 'base-64';
import { Redirect } from 'react-router-native';
import { SiteContext } from './context.js';
import axios from 'axios';


export default function SignIn() {
  const context = useContext(SiteContext);
  const [user, setUser] = useState(null);

  let handleUserName = (e, name) => {
    console.log("this is the event",name);
    setUser({username: e});
  }

  let handlePassword = (e, name) => {
    console.log("this is the event",name);
    setUser({...user, password:e});
    console.log(user);
  }
  
  let handleSubmit = e => {
    console.log(user);
    let username = user.username;
    let password = user.password;
    // const token = context.token;
    // const api = 'https://brsmith-auth-api.herokuapp.com/signin';
    const api = 'http://localhost:3333/signin';
    axios({
      method: 'post',
      url: api,
      auth: {
        username, password
      },
      headers: {  },
    }).then(response => {
      console.log('this is the response', response.data.token);
      context.setIsAuthenticated(true);
      context.setToken(response.data.token);
    })
  }
  const createTwoButtonAlert = () =>
  Alert.alert(
    "Success!",
    "Your have been logged in",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => to= "/signin" }
    ]
  );

  return (
    // this will ultimately redirect to /dashboard with user creds as props(?)
    <View>

      <TextInput
        textContentType='username'
        onChangeText={(e)=> handleUserName(e, 'username')}
        placeholder='username'
        autoCapitalize = "none"

      />

      <TextInput
        textContentType='password'
        onChangeText={(e)=> handlePassword(e, 'password')}
        placeholder='password'
        autoCapitalize = "none"
      />

      <Button onPress={handleSubmit} title='Sign In'/>
      {context.isAuthenticated ? 
      <Redirect
            to={{
              pathname: "/dashboard",
              // state: { from: props.location }
            }}
          />
      : null}


      {/* <Link to={"/"}>
        <Text> {'>'} go Home</Text>
      </Link>
      <Text>this is the SignIn component</Text> */}
    </View>

  )
}