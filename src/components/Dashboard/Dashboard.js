
import React, { useContext } from 'react';
import DriverDash from './DriverDash';
import RiderDash from './RiderDash';
import { SiteContext } from '../Auth/context';
import { View } from 'react-native';

export default function Dashboard() {
  
  const context = useContext(SiteContext);

  return(
    <View>
      {context.user.role === 'driver' ? <DriverDash></DriverDash> : <RiderDash></RiderDash>}
    </View>
  )
}