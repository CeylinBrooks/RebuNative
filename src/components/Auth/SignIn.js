import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Link } from 'react-router-native';
import { SiteContext } from './context.js';
import useAjax from '../hooks/ajaxHook.js';


export default function SignIn() {
  const context = useContext(SiteContext);
  const [get,add,remove,update] = useAjax();
  const [user, setUser] = useState(null);
  // const [password, setPassword] = useState(null);
  // // const [user, setUser] = useState(null);

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
    e.preventDefault();
    get(user);
  }

  return (
    // this will ultimately redirect to /dashboard with user creds as props(?)
    <View>
      <TextInput
        textContentType='username'
        onChangeText={(e)=> handleUserName(e, 'username')}
        placeholder='username'

      />

      <TextInput
        textContentType='password'
        onChangeText={(e)=> handlePassword(e, 'password')}
        placeholder='password'

      />

      <Button onPress={handleSubmit} title='Sign In'/>


      {/* <Link to={"/"}>
        <Text> {'>'} go Home</Text>
      </Link>
      <Text>this is the SignIn component</Text> */}
    </View>

  )
}