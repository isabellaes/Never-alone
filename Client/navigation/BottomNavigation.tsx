import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  RouteProp,
  NavigatorScreenParams,
} from "@react-navigation/native";
import React from "react";
import HomeScreen from "../Screens/HomeScreen";
import PhonenumberScreen from "../Screens/PhonenumberScreen";
import MeditationScreen from "../Screens/MeditationScreen";
import DailyNoteScreen from "../Screens/DailyNoteScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { CustomNavigationBar } from "../Componets/CustomNavigationBar.tsx";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

const Tab = createMaterialBottomTabNavigator<BottomNavBarList>();

export type BottomNavBarList = {
  Home: undefined;
  Profile: undefined;
  DailyNote: undefined;
  Meditation: undefined;
  PhoneNumber: undefined;
};

export const BottomNavigation = () => {
  const screenOptions = (
    route: RouteProp<BottomNavBarList, keyof BottomNavBarList>,
    color: string
  ) => {
    let iconName;

    switch (route.name) {
      case "Home":
        iconName = "home";
        break;
      case "Profile":
        iconName = "account";
        break;
      case "PhoneNumber":
        iconName = "heart";
        break;
      case "Meditation":
        iconName = "meditation";
        break;
      case "DailyNote":
        iconName = "note-edit-outline";
        break;
      default:
        iconName = "home";
        break;
    }

    return <MaterialCommunityIcons name={iconName} color={color} size={24} />;
  };
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => screenOptions(route, color),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="PhoneNumber" component={PhonenumberScreen} />
      <Tab.Screen name="Meditation" component={MeditationScreen} />
      <Tab.Screen name="DailyNote" component={DailyNoteScreen} />
    </Tab.Navigator>
  );
};
