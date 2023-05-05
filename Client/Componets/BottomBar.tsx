import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Appbar } from "react-native-paper";
import { RootStackParamList } from "../navigation/RootNavigator";
import { styles } from "../utils/styleSheet";

type Props = NativeStackScreenProps<
  RootStackParamList,
  | "DailyNote"
  | "Home"
  | "Meditation"
  | "Profile"
  | "PhoneNumber"
  | "EditProfile"
  | "MoodTracker"
>;

export function BottomBar({ navigation, route }: Props) {
  return (
    <Appbar style={[styles.appbarBottom]}>
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
  );
}
