import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import { SiteContext } from '../Auth/context';
import RiderTrip from './RiderTrip';

export default function Trip() {

  const context = useContext(SiteContext);

  return (
    <View style={styles.container}>
      {context.user.role === 'driver' ? <DriverTrip /> : <RiderTrip /> }
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00a88a',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
  },
});
