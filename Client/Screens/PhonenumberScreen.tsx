import { Link } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text } from "react-native";
import { BottomBar } from "../Componets/BottomBar";
import { RootStackParamList } from "../navigation/RootNavigator";
import { styles } from "../utils/styleSheet";

type Props = NativeStackScreenProps<RootStackParamList, "PhoneNumber">;

export default function PhonenumberScreen({ navigation, route }: Props) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, marginBottom: 25 }}>Phonenumber Screen</Text>
      <Link to="/Storys" style={{ marginBottom: 25 }}>
        <Text>Tryck här på länken för att komma till Storys</Text>
      </Link>
      <Link to="/Home">
        <Text>Tryck här på länken för att komma till Home</Text>
      </Link>
      <BottomBar navigation={navigation} route={route}></BottomBar>
    </View>
  );
}
