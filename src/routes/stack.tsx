import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import PublicStack from "./public";
import { StatusBar } from "react-native";
import Toast from "react-native-toast-message";
import useAuthStore from "../store/useAuthStore";
import PrivateStack from "./private";

const Stack: React.FC = () => {
  const { isLogged } = useAuthStore();
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#1C1C1E" barStyle="light-content" />
      {isLogged ? <PrivateStack /> : <PublicStack />}
      <Toast />
    </NavigationContainer>
  );
};

export default Stack;
