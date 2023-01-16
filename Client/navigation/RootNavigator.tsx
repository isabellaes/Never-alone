import {
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import DailyNoteScreen from "../Screens/DailyNoteScreen";
import EditProfileScreen from "../Screens/EditProfileScreen";
import HomeScreen from "../Screens/HomeScreen";
import LogInScreen from "../Screens/LogInScreen";
import MeditationScreen from "../Screens/MeditationScreen";
import PhonenumberScreen from "../Screens/PhonenumberScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import RegisterScreen from "../Screens/RegisterScreen";
import SettingsScreen from "../Screens/Settings";
import StoryScreen from "../Screens/StoryScreen";
import TipsScreen from "../Screens/TipsScreen";

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
  Tips: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Group>
        <Stack.Screen name="Home" component={HomeScreen}  options={{ title: "Home" }} />
        <Stack.Screen name="Login" component={LogInScreen}  options={{ title: "Login" }} />
        <Stack.Screen name="Register" component={RegisterScreen}  options={{ title: "Register" }} />
        <Stack.Screen name="Profile" component={ProfileScreen}  options={{ title: "Profile" }}/>
        <Stack.Screen name="EditProfile" component={EditProfileScreen}  options={{ title: "EditProfile" }}/>
        <Stack.Screen name="Storys" component={StoryScreen}  options={{ title: "Storys" }}/>
        <Stack.Screen name="DailyNote" component={DailyNoteScreen}  options={{ title: "DailyNote" }}/>
        <Stack.Screen name="Meditation" component={MeditationScreen}  options={{ title: "Meditation" }}/>
        <Stack.Screen name="PhoneNumber" component={PhonenumberScreen}  options={{ title: "PhoneNumber" }}/>
        <Stack.Screen name="Settings" component={SettingsScreen}  options={{ title: "Settings" }}/>
        <Stack.Screen name="Tips" component={TipsScreen}  options={{ title: "Tips" }}/>
     </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
