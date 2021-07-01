import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import ceylin from "../../../assets/Ceylin-rebu.png";
import yulia from "../../../assets/Yuliya.png";
import dan from "../../../assets/Dan.png";
import brendan from "../../../assets/Brendan.png";
import Nav from "../navigation.js";
import * as WebBrowser from "expo-web-browser";

export default function About() {
  const redirectToBrowser = async (url) => {
    await WebBrowser.openBrowserAsync(url);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, marginBottom: 10, fontWeight: "bold"}}>ABOUT US</Text>
      <Link
        onPress={() =>
          redirectToBrowser("https://www.linkedin.com/in/ceylinbrooks/")
        }
      >
        <Image style={styles.profileImg} source={ceylin} />
      </Link>
      <Text style={styles.text}>Ceylin Brooks</Text>
      <Link
        onPress={() =>
          redirectToBrowser("https://www.linkedin.com/in/yuliya-barysevich/")
        }
      >
        <Image style={styles.profileImg} source={yulia} />
      </Link>
      <Text style={styles.text}>Yulia Barysevich</Text>
      <Link
        onPress={() =>
          redirectToBrowser("https://www.linkedin.com/in/brendanrsmith/")
        }
      >
        <Image style={styles.profileImg} source={brendan} />
      </Link>
      <Text style={styles.text}>Brendan Smith</Text>
      <Link
        onPress={() =>
          redirectToBrowser("https://www.linkedin.com/in/danengel-seattle/")
        }
      >
        <Image style={styles.profileImg} source={dan} />
      </Link>
      <Text style={styles.text}>Dan Engel</Text>
      <View style={styles.nav}>
        <Nav />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  nav: {
    position: "absolute",
    bottom: -35,
    alignContent: "center",
  },
  text: {
    marginBottom: 50,
  },
});
