import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { RootStackParamList } from "../navigation/RootNavigator";
import Meditation from "../Componets/Meditation";
import { BottomBar } from "../Componets/BottomBar";
import Weather from "../Componets/Weather";
import { styles } from "../utils/styleSheet";
import SelectedImage from "../Componets/SelectedImage";

type Props = NativeStackScreenProps<RootStackParamList, "Meditation">;

export default function MeditationScreen({ navigation, route }: Props) {
  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "90%" , marginTop: 20 }}>
        <Image
          style={styles.imagetwo}
          source={{
            uri: "https://cdn.pixabay.com/photo/2020/03/21/19/27/sea-4955005_960_720.jpg",
          }}
        ></Image>
        
        
        <Text style={styles.title}>
        <SelectedImage stylescontainer={styles.container} stylesView={styles.view} stylesimage={styles.imagesmalls} />.. meditera i lugn och ro 
        </Text>
        
        
        <Meditation></Meditation>
        
        <View style={styles.card}>
          <Text style={styles.titletwo}>
          Eller en lugn promenad kanske,  Kolla vädret här nedan! </Text>  
        <Weather></Weather>
        </View>
      </ScrollView>
      <BottomBar navigation={navigation} route={route}></BottomBar>
    </View>
  );
}

