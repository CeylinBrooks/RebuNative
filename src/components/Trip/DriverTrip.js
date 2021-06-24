import React, { useContext } from 'react';
import { View, Text } from 'react-native';

import { SiteContext } from '../Auth/context';

export default function DriverTrip() {

const context = useContext(SiteContext);

return (
  <View>
    <Text>Driver Trip</Text>
  </View>
)
}