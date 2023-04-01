import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import Contacts from "../Componets/Contacts";
import { RootStackParamList } from "../navigation/RootNavigator";
import { styles } from "../utils/styleSheet";
import { BottomBar } from "../Componets/BottomBar";

type Props = NativeStackScreenProps<RootStackParamList, "PhoneNumber">;

interface IData {
  id: number;
  name: string;
  number: string;
  url: string;
}

export default function PhonenumberScreen({ navigation, route }: Props) {
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
