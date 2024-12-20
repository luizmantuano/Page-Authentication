import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/private/Home';
import { PrivateStackParamList, Screens } from './types';

const Stack = createNativeStackNavigator<PrivateStackParamList>();

const PrivateStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Screens.Home} component={Home} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}

export default PrivateStack