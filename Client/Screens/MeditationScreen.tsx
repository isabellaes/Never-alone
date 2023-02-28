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

//import { styles } from "../utils/styleSheet";

type Props = NativeStackScreenProps<RootStackParamList, "Meditation">;

export default function MeditationScreen({ navigation, route }: Props) {
  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "95%" }}>
        <Text style={styles.title}>
          Landa eller kanske bara ladda om en stund..
        </Text>
        <Image
          style={styles.image}
          source={{
            uri: "https://cdn.pixabay.com/photo/2020/03/21/19/27/sea-4955005_960_720.jpg",
          }}
        ></Image>
        <Text style={styles.titles}>
          Meditera i lugn och ro.. 
        </Text>
        <Meditation></Meditation>
        <Text style={styles.titlestvå}>
          ..hörlurarna i öronen och gå en lugn promenad..</Text>
        <Weather></Weather>

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
  },

  title: {
    textAlign: "center",
    fontSize: 23,
   
    padding: 10
  },
  titles: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 10
  
  },
  titlestvå: {
    textAlign:"center",
    fontSize: 20,
    marginTop: 20
  
  },
  image: {
    width: "100%",
    height: 175,
    marginBottom: 10,
  },
});
