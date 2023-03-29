
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, Text, ScrollView , StyleSheet} from "react-native";
import { BottomBar } from "../Componets/BottomBar";
import Contacts from "../Componets/Contacts";
import { RootStackParamList } from "../navigation/RootNavigator";


type Props = NativeStackScreenProps<RootStackParamList, "PhoneNumber">;


export default function PhonenumberScreen({navigation, route }: Props) {
  const contact = [
    {
      name: "Barn & ungdomspsykiatrin",
      number: 1177,
      url: "https://www.1177.se/Vastra-Gotaland/barn--gravid/vard-och-stod-for-barn/bup--barn--och-ungdomspsykiatrin/"
    },
    {
      name: "VuxenPsykiatrin",
      number: 1177,
      url: "https://www.1177.se/Vastra-Gotaland/liv--halsa/psykisk-halsa/att-soka-stod-och-hjalp/soka-psykiatrisk-vard/"
    },
    {
      name: "test3",
      number: 123456,
      url: "https://www.1177.se/Vastra-Gotaland/barn--gravid/vard-och-stod-for-barn/bup--barn--och-ungdomspsykiatrin/"
    },
    {
      name: "test4",
      number: 123456,
      url: "https://www.1177.se/Vastra-Gotaland/barn--gravid/vard-och-stod-for-barn/bup--barn--och-ungdomspsykiatrin/"
    },
    {
      name: "test5",
      number: 123456,
      url: "https://www.1177.se/Vastra-Gotaland/barn--gravid/vard-och-stod-for-barn/bup--barn--och-ungdomspsykiatrin/"
    },
    {
      name: "test6",
      number: 123456,
      url: "https://www.1177.se/Vastra-Gotaland/barn--gravid/vard-och-stod-for-barn/bup--barn--och-ungdomspsykiatrin/"
    },
    {
      name: "test7",
      number: 123456,
      url: "https://www.1177.se/Vastra-Gotaland/barn--gravid/vard-och-stod-for-barn/bup--barn--och-ungdomspsykiatrin/"
    },
    {
      name: "test8",
      number: 123456,
      url: "https://www.1177.se/Vastra-Gotaland/barn--gravid/vard-och-stod-for-barn/bup--barn--och-ungdomspsykiatrin/"
    },
    {
      name: "test9",
      number: 123456,
      url: "https://www.1177.se/Vastra-Gotaland/barn--gravid/vard-och-stod-for-barn/bup--barn--och-ungdomspsykiatrin/"
    }

   ]

  return (
    <View style={styles.container}>

      <Text style={{fontSize: 20, marginTop:10}}>Viktiga kontakt uppgifter!</Text>
      <ScrollView style={styles.citat}>
        { contact.map(c=> (
          <View>
            <Contacts name={c.name} number={c.number} url={c.url} ></Contacts>
          </View>
        ))}
         <Text>Här ska ev Gps funktionen ligga oxå</Text>
      </ScrollView>
      <BottomBar navigation={navigation} route={route}></BottomBar>
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


