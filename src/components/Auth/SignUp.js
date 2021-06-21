import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';

export default function SignUp() {
  return (
    // This will ultimately redirect to /signin
    <View>
      <Link to={"/"}>
        <Text> {'>'} go Home</Text>
      </Link>
      <Text>this is the SignUp component</Text>
    </View>

  )
}