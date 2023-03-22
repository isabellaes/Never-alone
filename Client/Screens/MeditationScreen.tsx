import { Link } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { RootStackParamList } from "../navigation/RootNavigator";
import { useAppDispatch } from "../store/store";
import OverviewCard from "../Componets/OverviewCard";
import Meditation from "../Componets/Meditation";
import { BottomBar } from "../Componets/BottomBar";
import Weather from "../Componets/Weather";
import { styles } from "../utils/styleSheet";

type Props = NativeStackScreenProps<RootStackParamList, "Meditation">;

export default function MeditationScreen({ navigation, route }: Props) {
  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "85%" , marginTop: 20 }}>
        <Image
          style={styles.imagetwo}
          source={{
            uri: "https://cdn.pixabay.com/photo/2020/03/21/19/27/sea-4955005_960_720.jpg",
          }}
        ></Image>
        <Text style={styles.title}>
          Meditera i lugn och ro.. 
        </Text>
        <Meditation></Meditation>
        <View style={styles.card}>
        <Text style={styles.titletwo}>
          En lugn promenad kanske..</Text>
          <Text style={styles.titletwo}>
          Vad är det för väder? </Text>  
        <Weather></Weather>
        </View>
      </ScrollView>
      <BottomBar navigation={navigation} route={route}></BottomBar>
    </View>
  );
}

