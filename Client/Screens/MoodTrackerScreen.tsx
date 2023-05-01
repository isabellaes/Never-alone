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

type Props = NativeStackScreenProps<RootStackParamList, "MoodTracker">;

export default function MoodTrackerScreen({ navigation, route }: Props) {
  const [dailyMood, setDailyMood] = React.useState<Mood[] | null>();

  const currentData = (state: AppState) => {
    return state.mood.data;
  };

  const currentMoodData = useAppSelector(currentData);

  React.useEffect(() => {
    if (currentMoodData) {
      setDailyMood(currentMoodData);
    }
  }, [currentMoodData]);

  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "100%" }}>
        <Text style={styles.title}>Hur mår du idag?</Text>
        <MoodPicker />

        <Text style={styles.title}>Statistik 7 dagar</Text>
      </ScrollView>
      <BottomBar navigation={navigation} route={route}></BottomBar>
    </View>
  );
}
