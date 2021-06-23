import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

export default function Landing() {
  return (
    <View>
      <Text style={styles.logo}>rebu</Text>
      <Link style={styles.link} to={"/about"}>
        <Text>go to About</Text>
      </Link>
      <Link style={styles.link} to={"/signin"}>
        <Text>go to Sign In</Text>
      </Link>
      <Link style={styles.link} to={"/signup"}>
        <Text>go to Sign up</Text>
      </Link>
      <Link style={styles.link} to={"/dashboard"}>
        <Text>go to Dashboard</Text>
      </Link>
      <Link style={styles.link} to={"/dashboard/driver"}>
        <Text>go to Driver Dashboard</Text>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00a88a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontFamily: "Helvetica",
    fontSize: 40,
    color: "#fff",
  },
  link: {
    padding: 10,
    borderWidth: 2,
    borderColor: "black",
    marginBottom: 10,
  }
});