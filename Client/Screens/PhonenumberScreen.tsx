import { Link } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, Text, ScrollView , StyleSheet} from "react-native";
import Meditation from "../Componets/Meditation";
import OpenURL from "../Componets/OpenUrl";

import { RootStackParamList } from "../navigation/RootNavigator";

// type Props = NativeStackScreenProps<RootStackParamList, "PhoneNumber">;

interface ContactProps {
  contacts: {
    name: string,
    number: number,
    url: string
  } []

}

export default function PhonenumberScreen() {
   const [contakt, setContakt] = useState<ContactProps["contacts"]>([
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
    }

   ])

  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "95%" }}>
        { contakt.map(c=> (
          <View>
            <Text style={styles.citat}>{c.name} Telefonnummer:{c.number} 
             <OpenURL url={c.url}></OpenURL>
            </Text>
          </View>
        ))}

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
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  citat: {
    fontSize: 17,
    textAlign: "center",
    padding: 15,
  },
});


