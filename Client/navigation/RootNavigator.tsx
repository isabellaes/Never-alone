import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React  from "react";
import EditProfileScreen from "../Screens/EditProfileScreen";
import LogInScreen from "../Screens/LogInScreen";
import RegisterScreen from "../Screens/RegisterScreen";
import { CustomNavigationBar } from "../Componets/CustomNavigationBar";
import { useAppSelector } from "../store/store";
import HomeScreen from "../Screens/HomeScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import DailyNotes from "../Screens/DailyNoteScreen";
import MeditationScreen from "../Screens/MeditationScreen";
import PhonenumberScreen from "../Screens/PhonenumberScreen";
import SettingsScreen from "../Screens/Settings";
import TodoScreen from "../Screens/TodoScreen";
import MoodTrackerScreen from "../Screens/MoodTrackerScreen";

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Profile: undefined;
  EditProfile: undefined;
  DailyNote: undefined;
  Meditation: undefined;
  PhoneNumber: undefined;
  Settings: undefined;
  Todo: undefined;
  MoodTracker: undefined;
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
        initialRouteName="Home"
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
            <Stack.Screen
              name="Todo"
              component={TodoScreen}
              options={{ title: "Todo" }}
              />

              <Stack.Screen
              name="MoodTracker"
              component={MoodTrackerScreen}
              options={{ title: "MoodTracker" }}
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
