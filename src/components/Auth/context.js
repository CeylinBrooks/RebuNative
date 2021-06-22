import React, {useState} from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import superagent from 'superagent';
import { useState } from 'react/cjs/react.development';
import { response } from 'express';

const API = 'http://localhost:3000';
const APP_SECRET = 'secretsauce';

export const LoginContext = React.createContext();

function LoginProvider(){
  //Loggedin first?
  const [setLoggedIn, loggedIn] = useState(false);
  const [user, setUser] = useState({});


  let login = (username, password) => {
    superagent.post(`${API}/signin`)
      .set('Authorization', `Basic ${btoa(`${username}: ${password}`)}`)
      .then(reponse => {
        console.log('API response', JSON.parse(response.text));
        return JSON.parse(response.text).token;
      })
      .then(token => validateToken(token));
  }
  let logout = () => {
    setLogInState(false, null, {});
  }

  let validateToken = (token) => {
    let user = jwt.verify(token, APP_SECRET);
    setLogInState(true, token, user)
  }

  let setLogInState = (loggedIn, token, user) => {
    cookie.set('auth', token);
    setLogInState(loggedIn);
    setUser(user);
  }


}