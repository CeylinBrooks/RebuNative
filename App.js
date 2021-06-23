import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Map from './src/components/Trip/Map';
import { NativeRouter, Route, Switch} from 'react-router-native';

import Landing from './src/components/Landing';
import About from './src/components/About/About';
import SignIn from './src/components/Auth/SignIn';
import SignUp from './src/components/Auth/SignUp';
import Dashboard from './src/components/Dashboard/Dashboard';
import TripHistory from './src/components/Trip/TripHistory';
import Trip from './src/components/Trip/Trip';
import RiderPayment from './src/components/Trip/RiderPayment';
import DashboardDriver from './src/components/Dashboard/Dashboard-driver'
import Profile from './src/components/Dashboard/Profile'


export default function App() {

  return (
    <NativeRouter>
      <SafeAreaView style={styles.container}>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/about' component={About} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/dashboard/driver' component={DashboardDriver} />
          <Route path='/dashboard/history' component={TripHistory} />
          <Route path='/trip' component={Trip} />
          <Route path='/payment' component={RiderPayment} />
        </Switch>
        <StatusBar style="auto" />
      </SafeAreaView>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00a88a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontFamily: "Helvetica",
    fontSize: 40,
    color: "#fff",
  },
});
