import React, { useContext, useState, useEffect, useRef } from "react";
import { encode, decode } from "base-64";
import { Animated, View, Text, StyleSheet, Alert } from "react-native";
import { Link, Redirect } from "react-router-native";
import AuthContext from "./Auth/context.js";
import { SiteContext } from "./Auth/context.js";

if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

export default function Landing() {

  const context = useContext(SiteContext);
  const [redirect, setRedirect] = useState(false);

  // const signOut = () => {
  //   context.setUser({ username: null, password: null, role: 'rider' });
  //   context.setRole(null);
  //   context.setTrip(null);
  //   context.setOrigin(null);
  //   context.setDestination(null);
  //   context.setIsAuthenticated(false);
  //   context.setToken(null);
  //   context.setComplete(false);
  //   console.log('logged out', context);
  // }

  const newTrip = () => {
    context.setTrip(null);
    context.setOrigin(null);
    context.setDestination(null);
    console.log('logged out', context);
    setRedirect(true);
  }

  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
  
  
    React.useEffect(() => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }
      ).start();
    })


  return (
    <AuthContext>
      <Animated.View style={{
          opacity: fadeAnim,
      }}>
        <Text style={styles.logo}>rebu</Text>
        {!context.isAuthenticated ? (
          <View>
            <Link style={styles.link} to={"/signup"}>
              <Text style={styles.text}>Sign Up</Text>
            </Link>
            <Link style={styles.link} to={"/signin"}>
              <Text style={styles.text}>Sign In</Text>
            </Link>
            <Link style={styles.link} to={"/about"}>
              <Text style={styles.text}>About Us</Text>
            </Link>
          </View>
        ) : (
          <View>
            <Link style={styles.link} to={"/dashboard"}>
              <Text style={styles.text}>Dashboard</Text>
            </Link>

            <Link style={styles.link} onPress={newTrip}>
              <Text style={styles.text}>New trip</Text>
            </Link>

            {/* <Link style={styles.link} onPress={signOut}>
              <Text style={styles.text}>Sign Out</Text>
            </Link> */}
            {redirect ?
              <Redirect
                to={{
                  pathname: "/dashboard",
                }}
              />
              : null}
          </View>
        )}
      </Animated.View>
    </AuthContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00a88a",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontFamily: "Arial",
    fontSize: 60,
    color: "#fff",
    marginBottom: 50,
    textAlign: "center"
  },
  link: {
    padding: 10,
    width: 200,
    backgroundColor: "white",
    borderRadius: 30,
    marginBottom: 10,
    alignItems: "center",
  },
  text: {
    color: "#00a88a",
  }

});
