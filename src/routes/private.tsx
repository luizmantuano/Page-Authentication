import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/private/Home';

const Stack = createNativeStackNavigator();

const PrivateStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}

export default PrivateStack