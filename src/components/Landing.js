import React, { useContext } from "react";
import { encode, decode } from "base-64";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Link } from "react-router-native";
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

  const signOut = () => {
    context.setUser({ username: null, password: null, role: 'rider' });
    context.setRole(null);
    context.setTrip(null);
    context.setOrigin(null);
    context.setDestination(null);
    context.setIsAuthenticated(false);
    context.setToken(null);
    console.log('logged out', context);
  }

  return (
    <AuthContext>
      <View>
        <Text style={styles.logo}>rebu</Text>
        {!context.isAuthenticated ? (
          <View>
            <Link style={styles.link} to={"/signup"}>
              <Text style={styles.text}>Sign up</Text>
            </Link>
            <Link style={styles.link} to={"/signin"}>
              <Text style={styles.text}>Sign In</Text>
            </Link>
          </View>
        ) : (
          <View>
            <Link style={styles.link} to={"/dashboard"}>
              <Text style={styles.text}>Dashboard</Text>
            </Link>
            {/* <Link style={styles.link} to={"/dashboard/driver"}>
              <Text>go to Driver Dashboard</Text>
            </Link> */}
            {/* <Link style={styles.link} to={"/trip"}>
              <Text>go to Trip</Text>
            </Link> */}
            <Link style={styles.link} onPress={signOut}>
              <Text style={styles.text}>Sign Out</Text>
            </Link>
          </View>
        )}
      </View>
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
    fontSize: 40,
    color: "#fff",
    marginBottom: 50,
  },
  link: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 6,
    marginBottom: 10,
    alignItems: "center",
  },
  text: {
    color: "#00a88a",
  }

});
