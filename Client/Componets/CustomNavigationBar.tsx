import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import { Appbar, Menu, useTheme } from "react-native-paper";

export function CustomNavigationBar() {
  return (
    <Appbar.Header mode="center-aligned" statusBarHeight={20}>
      <Appbar.Content
        titleStyle={{
          fontSize: 24,
          fontWeight: "bold",
        }}
        title={"Never Alone"}
      />
    </Appbar.Header>
  );
}
