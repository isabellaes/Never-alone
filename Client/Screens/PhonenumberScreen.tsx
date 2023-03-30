import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView , StyleSheet} from "react-native";
import { BottomBar } from "../Componets/BottomBar";
import Contacts from "../Componets/Contacts";
import { RootStackParamList } from "../navigation/RootNavigator";
import { styles } from "../utils/styleSheet";

type Props = NativeStackScreenProps<RootStackParamList, "PhoneNumber">;

interface IData {
  id: number;
  name: string;
  number: string;
  url: string;
}

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
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={{marginTop: 15, width: "90%" }}>
      <Text style={styles.titletwo}>Vid akuta lägen ring: <Text style={{fontWeight: "bold"}}>112</Text></Text>
        {data.map((c) => (
          <View style={styles.citat}>
            <Contacts
              key={c.id}
              name={c.name}
              number={c.number}
              url={c.url}
            ></Contacts>
          </View>
        ))}
      </ScrollView>
      <BottomBar navigation={navigation} route={route}></BottomBar>
    </View>
  );
}

