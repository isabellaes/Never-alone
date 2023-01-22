import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store/store";
import { BottomNavigation } from "./navigation/BottomNavigation";
import { RootNavigator } from "./navigation/RootNavigator";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <ReduxProvider store={store}>
      <StatusBar style="auto" />
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
