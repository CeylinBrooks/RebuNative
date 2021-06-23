import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Base64 from 'base-64';
import { Link } from 'react-router-native';
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
    // const token = context.token;
    // const api = 'https://brsmith-auth-api.herokuapp.com/signin';
    const api = 'http://localhost:3333/signin';
    axios({
      method: 'post',
      url: api,
      auth: {
        user
      },
      headers: {  },
    }).then(response => {
      console.log('response data', response);
      // if(response.status === 201) {
      //   createTwoButtonAlert();
      // }
    })
  }

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


      {/* <Link to={"/"}>
        <Text> {'>'} go Home</Text>
      </Link>
      <Text>this is the SignIn component</Text> */}
    </View>

  )
}