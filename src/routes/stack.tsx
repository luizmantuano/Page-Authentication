import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import PublicStack from './public';
import { StatusBar } from 'react-native';

const Stack: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#38A69D' barStyle='light-content' />
      <PublicStack />
    </NavigationContainer>
  );
};

export default Stack;
