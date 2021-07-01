import React, { useContext, useState } from "react";
import { StyleSheet, View, Text, Image, Alert } from "react-native";
import { Link } from "react-router-native";
import exit from "../../assets/exit.png";
import profile from "../../assets/profile.png";
import home from "../../assets/home.png";
import about from "../../assets/about.png";
import { SiteContext } from "./Auth/context.js";
import Modal from './Trip/modal.js';

export default function Nav() {
  const context = useContext(SiteContext);
  const [ alertMessage, setAlertMessage] = useState(false);

  const signOut = () => {
    setAlertMessage(true);
    context.setUser({ username: null, password: null, role: 'rider' });
    context.setRole(null);
    context.setTrip(null);
    context.setOrigin(null);
    context.setDestination(null);
    context.setIsAuthenticated(false);
    context.setToken(null);
    context.setComplete(false);
    console.log('logged out', context);
  }

  return (
    <View style={styles.container}>
      <View style={styles.linkedPages}>
      <Link to={"/"}>
          <Image style={styles.exitImg} source={home} />
        </Link>
        <Link to={"/profile"}>
          <Image style={styles.exitImg} source={profile} />
        </Link>
        <Link to={"/about"}>
          <Image style={styles.exitImg} source={about} />
        </Link>
        <Link onPress={signOut}>
          <Image style={styles.exitImg} source={exit} />
        </Link>
      </View>
      {alertMessage === true ? (
        <Link to={"/dashboard"}>
          <Modal
            message="You have been successfully logged out. The Home button will take you back to the login."
          />
        </Link>
        ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e3e3e3",
    width: 400,
    height: 80,
    padding: 10,
  },
  linkedPages: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  link: {
    
  },
  exitImg: {
    width: 35,
    height: 35,
  },
});
