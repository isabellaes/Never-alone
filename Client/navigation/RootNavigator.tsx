import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { Component } from "react";
import EditProfileScreen from "../Screens/EditProfileScreen";
import LogInScreen from "../Screens/LogInScreen";
import RegisterScreen from "../Screens/RegisterScreen";
import StoryScreen from "../Screens/StoryScreen";
import { CustomNavigationBar } from "../Componets/CustomNavigationBar";
import { useAppSelector } from "../store/store";
import HomeScreen from "../Screens/HomeScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import DailyNotes from "../Screens/DailyNoteScreen";
import MeditationScreen from "../Screens/MeditationScreen";
import PhonenumberScreen from "../Screens/PhonenumberScreen";
import SettingsScreen from "../Screens/Settings";

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
          header: (route) => <CustomNavigationBar {...route} />,
        }}
      >
        {isAuthenticated ? (
          <Stack.Group>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: "Home" }}
            />

            <Stack.Screen
              name="Profile"
              component={ProfileScreen}
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
              component={DailyNotes}
              options={{ title: "DailyNote" }}
            />
            <Stack.Screen
              name="Meditation"
              component={MeditationScreen}
              options={{ title: "Meditation" }}
            />
            <Stack.Screen
              name="PhoneNumber"
              component={PhonenumberScreen}
              options={{ title: "PhoneNumber" }}
            />
            <Stack.Screen
              name="Settings"
              component={SettingsScreen}
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
