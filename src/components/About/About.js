import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';

export default function About() {

  return (
    <View>
      <Link to={"/"}>
        <Text> {'>'} go Home</Text>
      </Link>
      <Text>This is the About component</Text>
    </View>
  )

}