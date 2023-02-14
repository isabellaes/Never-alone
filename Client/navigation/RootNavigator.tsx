import {
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { Component } from "react";
import EditProfileScreen from "../Screens/EditProfileScreen";
import LogInScreen from "../Screens/LogInScreen";
import RegisterScreen from "../Screens/RegisterScreen";
import StoryScreen from "../Screens/StoryScreen";
import { CustomNavigationBar } from "../Componets/CustomNavigationBar";
import { BottomNavigation } from "./BottomNavigation";
import { useAppSelector } from "../store/store";
import HomeScreen from "../Screens/HomeScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import DailyNotes from "../Screens/DailyNoteScreen";
import MeditationScreen from "../Screens/MeditationScreen";
import PhonenumberScreen from "../Screens/PhonenumberScreen";

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Profile: undefined;
  EditProfile: undefined;
  Storys: undefined;
  DailyNote: undefined;
  Meditation: undefined;
  PhoneNumber: undefined;
  Settings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  const auth = useAppSelector((state) => state.user);

  const isAuthenticated = auth.expiration
    ? new Date(auth.expiration).getTime() > new Date().getTime() && !!auth.token
    : false;
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: (props) => <CustomNavigationBar />,
        }}
      >
        {isAuthenticated ? (
          <Stack.Group>
            <Stack.Screen
              name="Home"
              component={BottomNavigation}
              options={{ title: "Home" }}
            />

            <Stack.Screen
              name="Profile"
              component={BottomNavigation}
              options={{ title: "Profile" }}
            />
            <Stack.Screen
              name="EditProfile"
              component={EditProfileScreen}
              options={{ title: "EditProfile" }}
            />
            <Stack.Screen
              name="Storys"
              component={StoryScreen}
              options={{ title: "Storys" }}
            />
            <Stack.Screen
              name="DailyNote"
              component={BottomNavigation}
              options={{ title: "DailyNote" }}
            />
            <Stack.Screen
              name="Meditation"
              component={BottomNavigation}
              options={{ title: "Meditation" }}
            />
            <Stack.Screen
              name="PhoneNumber"
              component={BottomNavigation}
              options={{ title: "PhoneNumber" }}
            />
            <Stack.Screen
              name="Settings"
              component={BottomNavigation}
              options={{ title: "Settings" }}
            />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen
              name="Login"
              component={LogInScreen}
              options={{ title: "Login" }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{ title: "Register" }}
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
