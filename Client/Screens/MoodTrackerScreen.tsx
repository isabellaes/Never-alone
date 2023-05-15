import { Dimensions } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { RootStackParamList } from "../navigation/RootNavigator";
import { useAppDispatch, useAppSelector } from "../store/store";
//import MoodPicker from "../Componets/MoodPicker";
import { AppState } from "../store/store";
import { Mood } from "../utils/types";
import { BottomBar } from "../Componets/BottomBar";
import { styles } from "../utils/styleSheet";
import MoodTracker from "../Componets/MoodTracker";
import { getMonthlyData, getWeeklyData, sortData } from "../utils/statistic";
import { Button, Dialog, Portal } from "react-native-paper";
import { createMood, getAllMoods } from "../store/moodTrackerSlice";

type Props = NativeStackScreenProps<RootStackParamList, "MoodTracker">;

export default function MoodTrackerScreen({ navigation, route }: Props) {
  const [weeklyData, setWeeklyData] = React.useState<number[] | null>();
  const [visible, setVisible] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const currentData = (state: AppState) => {
    return state.mood.data;
  };
  const dispatch = useAppDispatch();

  const currentMoodData = useAppSelector(currentData);

  React.useEffect(() => {
    dispatch(getAllMoods());
  }, []);

  React.useEffect(() => {
    if (currentMoodData) {
      setWeeklyData(sortData(currentMoodData));
    }
  }, [currentMoodData]);

  function onPress(icon: string) {
    dispatch(createMood({ icon }));
    setMessage("Registrerat");
    showDialog();
  }

  const icons: string[] = ["😢", "👎", "👌", "👍", "😊"];

  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "100%", marginBottom: 50 }}>
        <Text style={styles.title}>Hur mår du idag?</Text>
        <View style={styles1.content}>
          {icons.map((element) => (
            <Button style={styles1.button} onPress={() => onPress(element)}>
              {element}
            </Button>
          ))}
        </View>
        <Text style={styles.title}>Statistik</Text>
        {weeklyData ? (
          <MoodTracker label={icons} dataset={weeklyData}></MoodTracker>
        ) : (
          <Text>Finns ingen data att visa</Text>
        )}
      </ScrollView>
      <View>
        <Portal>
          <Dialog visible={visible}>
            <Dialog.Content>
              <Text>{message}</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Ok</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
      <BottomBar navigation={navigation} route={route}></BottomBar>
    </View>
  );
}

const styles1 = StyleSheet.create({
  button: {
    marginTop: 3,
    flex: 1,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    alignContent: "center",
  },
  content: {
    flexDirection: "row",
  },
});
