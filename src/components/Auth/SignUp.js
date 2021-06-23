import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Link } from 'react-router-native';
// import { SiteContext } from './context.js';
import useAjax from '../hooks/ajaxHook.js';


export default function SignIn() {
  // const context = useContext(SiteContext);
  const [get,add,remove,update] = useAjax();
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    setUser({role: "rider"});
    console.log(user);
  }, [])
  let handleUserName = (e, name) => {
    console.log("this is the event",name);
    setUser({...user, username: e});
  }

  let handlePassword = (e, name) => {
    console.log("this is the event",name);
    setUser({...user, password: e});
    console.log(user);
  }

  let handleRole = (e, name) => {
    console.log("this is the event",name);
    setRole({...user, role: e});
    console.log(user);
  }
  
  let handleSubmit = e => {
    e.preventDefault();
    // if(e) {
    //   setUser({...user, role })
    // }
    console.log(user);
    // add(user);
  }

  return (
    // this will ultimately redirect to /dashboard with user creds as props(?)
    <View>
      <Picker
        style={styles.picker}
        selectedValue={role}
        onValueChange={(itemValue, itemIndex) =>
        setRole(itemValue)
        }>
        <Picker.Item label="Select Role" value="rider" />
        <Picker.Item label="Rider" value="rider" />
        <Picker.Item label="Driver" value="driver" />
      </Picker>

      <TextInput
      style={styles.input}
        textContentType='username'
        onChangeText={(e)=> handleUserName(e, 'username')}
        placeholder='Username'
        autoCapitalize = "none"
      />

      <TextInput
      style={styles.input}
        textContentType='password'
        onChangeText={(e)=> handlePassword(e, 'password')}
        placeholder='Password'
        autoCapitalize = "none"
      />

      <Button 
      style={styles.button}
      onPress={handleSubmit} title='Sign Up'/>
      <Text style={styles.text}>Already Signed up?</Text>
      <Link style={styles.link} to={"/signin"}>
        <Text style={styles.text}>Go To Sign In</Text>
      </Link>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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