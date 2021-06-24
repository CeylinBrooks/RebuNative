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
    context.setUser(null);
    context.setRole(null);
    context.setTrip(null);
    context.setOrigin(null);
    context.setDestination(null);
    context.setIsAuthenticated(false);
    context.setToken(null);
  
  }

  return (
    <AuthContext>
      <View>
        <Text style={styles.logo}>rebu</Text>
        {/* {!context.isAuthenticated ? ( */}
          <View>
            <Link style={styles.link} to={"/about"}>
              <Text>go to About</Text>
            </Link>
            <Link style={styles.link} to={"/signin"}>
              <Text>go to Sign In</Text>
            </Link>
            <Link style={styles.link} to={"/signup"}>
              <Text>go to Sign up</Text>
            </Link>
          </View>
        {/* ) : ( */}
          <View>
            <Link style={styles.link} to={"/dashboard"}>
              <Text>go to Dashboard</Text>
            </Link>
            <Link style={styles.link} to={"/dashboard/driver"}>
              <Text>go to Driver Dashboard</Text>
            </Link>
            <Link style={styles.link} to={"/trip"}>
              <Text>go to Trip</Text>
            </Link>
            <Link style={styles.link} onPress={signOut}>
              <Text>Sign Out</Text>
            </Link>
          </View>
        {/* )} */}
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
    fontFamily: "Helvetica",
    fontSize: 40,
    color: "#fff",
  },
  link: {
    padding: 10,
    borderWidth: 2,
    borderColor: "black",
    marginBottom: 10,
  },
});
