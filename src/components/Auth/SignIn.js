import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';

export default function SignIn() {

  return (
  // this will ultimately redirect to /dashboard with user creds as props(?)
  <View>
      <Link to={"/"}>
        <Text> {'>'} go Home</Text>
      </Link>
      <Text>this is the SignIn component</Text>
    </View>

  )
}