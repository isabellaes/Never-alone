import { Link } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text } from "react-native";
import { RootStackParamList } from "../navigation/RootNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Settings">;

export default function SettingsScreen({navigation}: Props) {
  return(
    <View>
    <Text>Settings</Text>
    <Link to="/Home"><Text>Tryck här på länken för att komma till Home</Text></Link>
  </View>
  )
 
}
