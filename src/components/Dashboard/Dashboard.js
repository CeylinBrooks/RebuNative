
import React, { useContext, useEffect } from 'react';
import DriverDash from './DriverDash';
import RiderDash from './RiderDash';
import { SiteContext } from '../Auth/context';
import { View } from 'react-native';
import Nav from '../navigation.js';

export default function Dashboard() {

  const context = useContext(SiteContext);


  return(
    <View>
      {context.user.role === 'driver' ? <DriverDash></DriverDash> : <RiderDash></RiderDash>}
    </View>
  )
}