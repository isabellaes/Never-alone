/*import React from "react";
import {
  NativeStackHeaderProps,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { View, StyleSheet } from "react-native";
import { Appbar, FAB, useTheme } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { RootStackParamList } from "../navigation/RootNavigator";

type Props = NativeStackScreenProps<
  RootStackParamList,
  "DailyNote" | "Home" | "Meditation" | "Profile" | "PhoneNumber"
>;

const BOTTOM_APPBAR_HEIGHT = 80;
export function BottomBar({ navigation, route }: Props) {
  const { bottom } = useSafeAreaInsets();
  return (
    <View>
      <Appbar
        style={[
          styles.bottom,
          {
            height: BOTTOM_APPBAR_HEIGHT + bottom,
          },
        ]}
        safeAreaInsets={{ bottom }}
      >
        <Appbar.Action
          icon="home"
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
        <Appbar.Action
          icon="account"
          onPress={() => {
            navigation.navigate("Profile");
          }}
        />
        <Appbar.Action
          icon="heart"
          onPress={() => {
            navigation.navigate("PhoneNumber");
          }}
        />
        <Appbar.Action
          icon="meditation"
          onPress={() => {
            navigation.navigate("Meditation");
          }}
        />
        <Appbar.Action
          icon="note-edit-outline"
          onPress={() => {
            navigation.navigate("DailyNote");
          }}
        />
      </Appbar>
    </View>
  );
}

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: "aquamarine",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
});*/
