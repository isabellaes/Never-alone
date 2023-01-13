import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./Screens/HomeScreen";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store/store";
import { RootNavigator } from "./navigation/RootNavigator";

export default function App() {
  return (
    <ReduxProvider store={store}>
      <RootNavigator />
    </ReduxProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
