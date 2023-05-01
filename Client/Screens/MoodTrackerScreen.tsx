import { Dimensions } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { RootStackParamList } from "../navigation/RootNavigator";
import { useAppDispatch, useAppSelector } from "../store/store";
import MoodPicker from "../Componets/MoodPicker";
import { AppState } from "../store/store";
import { Mood } from "../utils/types";
import { BottomBar } from "../Componets/BottomBar";
import { styles } from "../utils/styleSheet";
import MoodTracker from "../Componets/MoodTracker";
import { mapData, sortData } from "../utils/statistic";

type Props = NativeStackScreenProps<RootStackParamList, "MoodTracker">;

export default function MoodTrackerScreen({ navigation, route }: Props) {
  const [dailyMood, setDailyMood] = React.useState<Mood[] | null>();
  const [number, setNumber] = React.useState<number[] | null>();

  const currentData = (state: AppState) => {
    return state.mood.data;
  };

  const currentMoodData = useAppSelector(currentData);

  React.useEffect(() => {
    if (currentMoodData) {
      const data = mapData(currentMoodData);
      console.log(data.length);
      setDailyMood(currentMoodData);
      const numbers = sortData(currentMoodData, icons);

      setNumber(numbers);
    }
  }, [currentMoodData]);

  const icons: string[] = ["😢", "👎", "👌", "👍", "😊"];

  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "100%" }}>
        <Text style={styles.title}>Hur mår du idag?</Text>
        <MoodPicker />
        <Text style={styles.title}>Statistik senaste veckan</Text>
        {number ? (
          <MoodTracker label={icons} dataset={number}></MoodTracker>
        ) : (
          <Text>Finns ingen data att visa</Text>
        )}
        <Text style={styles.title}>Statistik senaste månaden</Text>
        {number ? (
          <MoodTracker label={icons} dataset={number}></MoodTracker>
        ) : (
          <Text>Finns ingen data att visa</Text>
        )}
      </ScrollView>
      <BottomBar navigation={navigation} route={route}></BottomBar>
    </View>
  );
}
