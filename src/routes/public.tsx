import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../pages/public/welcome";
import Login from "../pages/public/Login";
import Register from "../pages/public/Register";
import ForgetPassword from "../pages/public/ForgetPassword";
import { Onboarding } from "../pages/public/Onboarding";
import { PublicStackParamList, Screens } from "./types";

const Stack = createNativeStackNavigator<PublicStackParamList>();

const PublicStack = () => {
  return (
    <Stack.Navigator initialRouteName={Screens.Onboarding}>
      <Stack.Screen
        name={Screens.Onboarding}
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Screens.Welcome}
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Screens.Login}
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Screens.Register}
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Screens.ForgetPassword}
        component={ForgetPassword}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default PublicStack;
