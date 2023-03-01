import { Link } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { RootStackParamList } from "../navigation/RootNavigator";
import { useAppDispatch } from "../store/store";
import OverviewCard from "../Componets/OverviewCard";
import Meditation from "../Componets/Meditation";
import { BottomBar } from "../Componets/BottomBar";
//import { styles } from "../utils/styleSheet";

type Props = NativeStackScreenProps<RootStackParamList, "Meditation">;

export default function MeditationScreen({ navigation, route }: Props) {
  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "95%" }}>
        <Text style={styles.title}>
          Sätt dig eller lägg dig ner bekvämt och koppla av lite, username
        </Text>
        <Image
          style={styles.image}
          source={{
            uri: "https://img.freepik.com/free-photo/meditation_1048-1840.jpg",
          }}
        ></Image>

        <Meditation></Meditation>
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
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-between",
  },

  title: {
    textAlign: "center",
    fontSize: 20,
    padding: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 300,
    marginBottom: 40,
  },
});
