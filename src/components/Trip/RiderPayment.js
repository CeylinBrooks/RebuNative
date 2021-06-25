import React, { useState, Component } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View,
} from "react-native";
import { Link } from 'react-router-native';
import {
  CreditCardInput,
  LiteCreditCardInput,
} from "react-native-credit-card-input";
import exit from '../../../assets/exit.png';
import profile from '../../../assets/profile.png';


class RiderPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
      expMonth: "",
      expYear: "",
      cvc: "",
      name: "",
      valid: false,
    };
  }

  handleOnChange = (form) => {
    console.log(form);
    if (form.values.expiry.length === 5) {
      this.setState({
        number: form.values.number,
        cvc: form.values.cvc,
        expMonth: form.values.expiry.substring(0, 2),
        expYear: form.values.expiry.substring(3, 5),
      });
    }
    if (form.valid === true) {
      this.setState({
        valid: form.valid,
      });
    }
  };

  successAlert = () =>
    Alert.alert("Success!", "Your credit card has been saved", [
      {
        text: "Ok",
        onPress: () => console.log("Ok Pressed"),
        style: "cancel",
      },
    ]);

  failAlert = () =>
    Alert.alert("Failed to Save!", "Check credit card number", [
      {
        text: "OK",
        onPress: () => console.log("OK Pressed"),
        style: "cancel",
      },
    ]);

  handleSubmit = () => {
    console.log(this.state);
    if (this.state.valid === true) {
      this.successAlert();
    }
    if (this.state.valid === false) {
      this.failAlert();
    }
  };

  render() {
    return (

      <ScrollView>
        <Text style={styles.titleStyle}>Add a new credit card</Text>
        <CreditCardInput onChange={this.handleOnChange} />

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={this.handleSubmit}
        >
          <Text style={styles.buttonText}>Save Card</Text>
        </TouchableOpacity>

        {/* <Link to={"/"}>
          <Text style={styles.buttonText}>Home</Text>
        </Link> */}
      </ScrollView>


    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 30,
    marginLeft: "25%",
    height: 45,
    width: "50%",
    flexDirection: "row",
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
  savedCardLabel: {
    fontSize: 23,
    marginTop: 20,
    marginBottom: 20,
  },
  titleStyle: {
    fontSize: 27,
    textAlign: "center",
    marginBottom: 30,
    marginTop: 150,
    color: "#ffffff",
  },
  exitImg: {
    width: 35,
    height: 35,
    alignSelf: "flex-end",
    margin: 20,
  },
});

export default RiderPayment;
