import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../pages/public/welcome';
import Login from '../pages/public/Login';
import Register from '../pages/public/Register';
import ForgetPassword from '../pages/public/ForgetPassword';


const Stack = createNativeStackNavigator();

const PublicStack = () => {
  return (
    <Stack.Navigator initialRouteName='Welcome'>
      <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
      <Stack.Screen
        name='Register'
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='ForgetPassword'
        component={ForgetPassword}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default PublicStack;
