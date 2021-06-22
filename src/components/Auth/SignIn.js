import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Link } from 'react-router-native';


export default function SignIn() {
  const [user, setUser] = useState(null);

  let handleChange = e => {
    setUser({ [e.target.name]: [e.target.value] })
  }

  let handleSubmit = e => {
    e.preventDefault();
    //user.username, user.password
  }




  return (
    // this will ultimately redirect to /dashboard with user creds as props(?)
    <View onSubmit={handleSubmit}>
      <TextInput
        name='username'
        onChangeText={handleChange}
        placeholder='Enter Your Username:'

      />


      <TextInput

        name='password'
        onChangeText={handleChange}
        placeholder='Enter Your Password:'

      />

      <Button title='Sign In'/>


      {/* <Link to={"/"}>
        <Text> {'>'} go Home</Text>
      </Link>
      <Text>this is the SignIn component</Text> */}
    </View>

  )
}