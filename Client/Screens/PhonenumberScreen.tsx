import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
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

export default function PhonenumberScreen() {
  const [data, setData] = useState<IData[]>([]);

  const fetchData = async () => {
    try {
      const jsonData = require("./PhoneNumbers.json");
      setData(jsonData.contact);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18, marginTop: 10 }}>
        Viktiga kontakt uppgifter!
      </Text>
      <ScrollView style={{marginTop: 10, width: "95%" }}>
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
        <Text>Här ska ev Gps funktionen ligga oxå</Text>
      </ScrollView>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: "100%",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     alignContent: "center",
//   },
//   citat: {
//     textAlign: "center",
//     padding: 15,
//   },
// });
