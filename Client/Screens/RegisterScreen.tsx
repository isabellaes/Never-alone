import { Link } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text } from "react-native";
import { RootStackParamList } from "../navigation/RootNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Register">;

export default function RegisterScreen({navigation}: Props) {
  return(
    <View>
 <Text style={{fontSize:25, marginBottom:25}}>Register Screen</Text>
      <Link to="/Profile" style={{marginBottom:25}}><Text>Tryck här på länken för att komma till Profile</Text></Link>
      <Link to="/Home"><Text>Tryck här på länken för att komma till Home</Text></Link>
  </View>
  )
 
}
