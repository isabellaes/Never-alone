import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import React from "react";
import { Appbar } from "react-native-paper";
import { styles } from "../utils/styleSheet";
import { logout } from "../store/authSlice";
import { useAppDispatch } from "../store/store";

export function CustomNavigationBar({ options }: NativeStackHeaderProps) {
  const dispatch = useAppDispatch();
  return (
    <Appbar.Header
      mode="center-aligned"
      statusBarHeight={25}
      style={styles.appbarHeader}
    >
      <Appbar.Content titleStyle={styles.appbarHeader} title={options.title} />
      <Appbar.Action icon="logout" onPress={() => dispatch(logout())} />
    </Appbar.Header>
  );
}
