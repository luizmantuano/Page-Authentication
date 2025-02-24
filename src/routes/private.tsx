import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PrivateStackParamList, Screens } from "./types";
import TabNavigator from "./tabs";

const Stack = createNativeStackNavigator<PrivateStackParamList>();

const PrivateStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.Home}
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default PrivateStack;
