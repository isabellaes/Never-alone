import { Link } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text } from "react-native";
import { RootStackParamList } from "../navigation/RootNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View>
      <Text style={{ fontSize: 25 }}>Home Screen</Text>
      <Link to="/Login">
        <Text>Tryck här på länken för att komma till Login</Text>
      </Link>
      <Text style={{ fontSize: 20 }}>
        Tänker att denna sidan får innehålla det som är på översikt sidan?{" "}
      </Text>
    </View>
  );
}
