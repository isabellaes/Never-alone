
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, ScrollView , StyleSheet} from "react-native";
import Contacts from "../Componets/Contacts";
import { RootStackParamList } from "../navigation/RootNavigator";


type Props = NativeStackScreenProps<RootStackParamList, "PhoneNumber">;


export default function PhonenumberScreen() {


  return (
    <View style={styles.container}>

      <Text style={{fontSize: 20, marginTop:10}}>Viktiga kontakt uppgifter!</Text>
      <ScrollView style={styles.citat}>
        <Contacts></Contacts>
         <Text>Här ska ev Gps funktionen ligga oxå</Text>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  citat: {
    textAlign: "center",
    padding: 15,
  },
});


