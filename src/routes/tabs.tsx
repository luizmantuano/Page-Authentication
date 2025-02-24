import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/private/Home";
import Search from "../pages/private/Search";
import Favorites from "../pages/private/Favorites";
import Profile from "../pages/private/Profile";
import { Screens, TabParamList } from "./types";
import { useTheme } from "styled-components/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.bottomTabs.background,
          borderTopWidth: 1,
          borderTopColor: theme.colors.bottomTabs.border,
          height: 60,
          paddingBottom: 0,
          paddingTop: 0,
          position: "absolute",
          elevation: 0,
        },
        tabBarActiveTintColor: theme.colors.bottomTabs.active,
        tabBarInactiveTintColor: theme.colors.bottomTabs.inactive,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name={Screens.Home}
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-variant" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={Screens.Search}
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="magnify" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={Screens.Favorites}
        component={Favorites}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart-outline" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={Screens.Profile}
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="account-circle-outline" size={28} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
