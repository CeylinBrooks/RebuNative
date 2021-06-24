import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Switch } from 'react-native';
import { Link, Redirect } from 'react-router-native';
import axios from 'axios';
import { SiteContext } from './context.js';


export default function SignIn() {
  const context = useContext(SiteContext);

  // const [user, setUser] = useState({username: null, password: null, role: 'rider'});
  // const [role, setRole] = useState('rider');
  const [isEnabled, setIsEnabled] = useState(false);
  const [success, setSuccess] = useState(false);



  let handleUserName = (e, name) => {
    console.log("this is the event", name);
    context.setUser({ ...context.user, username: e });
    console.log(context.user);
  }

  let handlePassword = (e, name) => {
    console.log("this is the event", name);
    context.setUser({ ...context.user, password: e });
    console.log(context.user);
  }

  let handleRole = (e, name) => {
    console.log("this is the event", name);
    context.setUser({ ...context.user, role: e });
    console.log(context.user);
  }


  const handleSubmit = async () => {
    // const api = 'https://brsmith-auth-api.herokuapp.com/signup';
    const api = 'http://localhost:3333/signup';
    await axios({
      method: 'post',
      url: api,
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      data: context.user,
    }).then(response => {
      context.setToken(response.data.token);
      if (response.status === 201) {
        console.log('response.data.user!!!!!!!', response.data.user);
        context.setUser(response.data.user);
        setSuccess(true);
        createTwoButtonAlert();
      }
      if (response.status === 500) {
        Alert.alert(
          "Error",
          "Please choose another username.", [{text: "OK"}]
        )
      }
    })
  }

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Success!",
      "Your user has been created. Please sign in to access the site",
      [
        // {
        //   text: "Cancel",
        //   onPress: () => console.log("Cancel Pressed"),
        //   style: "cancel"
        // },
        { text: "OK", onPress: () => console.log('OK') }
      ]
    );

  const toggleSwitch = () => {
    if (context.user.role === 'driver') {
      // setRole('rider');
      handleRole('rider', 'role');
      setIsEnabled(false);
    } else {
      // setRole('driver');
      handleRole('driver', 'role');
      setIsEnabled(true);
    };
  }

  return (
    <View style={styles.container}>
      <View style={styles.roleSwitch}>
        <Text>Rider</Text>
        <Switch
          value={isEnabled}
          onValueChange={toggleSwitch}
        />
        <Text>Driver</Text>
      </View>
      <TextInput
        style={styles.input}
        textContentType='username'
        onChangeText={(e) => handleUserName(e, 'username')}
        placeholder='Username'
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        textContentType='password'
        onChangeText={(e) => handlePassword(e, 'password')}
        placeholder='Password'
        autoCapitalize="none"
      />

      <Button
        style={styles.button}
        onPress={handleSubmit} title='Sign Up' />
      <Text style={styles.text}>Already Signed up?</Text>
      <Link style={styles.link} to={"/signin"}>
        <Text style={styles.text}>Go To Sign In</Text>
      </Link>
      {success ?
        <Redirect
          to={{
            pathname: "/signin",
            // state: { from: props.location }
          }}
        />
        : null}

    </View>

  )
}

const styles = StyleSheet.create({
  container: {
  },
  roleSwitch: {
    justifyContent: "center",
    flexDirection: "row"
  },
  picker: {
    height: 50,
    overflow: 'hidden',
    fontFamily: "Helvetica",
    fontSize: 30,
    color: "white",
    justifyContent: 'center',
    marginBottom: 10,
  },
  input: {
    color: "black",
    backgroundColor: "white",
    width: 250,
    borderRadius: 5,
    fontSize: 20,
    paddingLeft: 5,
    height: 40,
    margin: 10,
    borderColor: '#7a42f4',
  },
  button: {
    marginBottom: 20,
    // borderWidth: 2,
    // borderColor: "black",
  },
  link: {
    padding: 10,
    // borderWidth: 2,
    // borderColor: "black",
    marginBottom: 10,
    borderRadius: 5,
    textAlign: 'center',
    // marginTop: 100,
  },
  text: {
    textAlign: 'center',
  }
});