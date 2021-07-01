import React from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { Link } from "react-router-native";
import back from "../../../assets/back.png";
import Nav from "../navigation.js";

export default function Profile() {
  return (
    <View>
      <View style={styles.container}>

          <Text style={styles.formLabel}>Settings</Text>
          <TextInput placeholder="Username" style={styles.inputStyle} />
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            style={styles.inputStyle}
          />
          <TextInput
            secureTextEntry={true}
            placeholder="Email"
            style={styles.inputStyle}
          />
          <TextInput
            secureTextEntry={true}
            placeholder="Phone Number"
            style={styles.inputStyle}
          />
          <Link style={styles.buttonStyle}>
            <Text style={styles.buttonText}>Save Changes</Text>
          </Link>
        <Link to={"/payment"} style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Add a payment</Text>
        </Link>
        <View style={styles.nav}>
          <Nav/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },

  formLabel: {
    fontSize: 20,
    color: "#fff",
    marginTop: 100,
  },
  inputStyle: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: "#DCDCDC",
  },
  formText: {
    color: "#fff",
    fontSize: 20,
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
  buttonStyle: {
    marginTop: 30,
    height: 45,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
    color: "#00a88a",
  },
  buttonText: {
    color: "#00a88a",
    fontWeight: "600",
  },
  nav: {
    // width: 300,
    position: "absolute",
    bottom: 0,
    // alignContent: "center",
    marginBottom: -35
  }
});
