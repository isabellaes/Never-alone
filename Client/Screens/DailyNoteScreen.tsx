import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import { RootStackParamList } from "../navigation/RootNavigator";
import { DailyNote } from "../utils/types";
import { AppState, useAppDispatch, useAppSelector } from "../store/store";
import { getDailyNote } from "../slices/dailynoteSlice";
import NoteCard from "../Componets/NoteCard";

type Props = NativeStackScreenProps<RootStackParamList, "DailyNote">;

export default function DailyNotes({ navigation }: Props) {
  // const [text, setText] = React.useState("");
  const [note, setNote] = React.useState<DailyNote | null>();
  const [selectedEmoji, setSelectedEmoji] = useState();

  const dispatch = useAppDispatch();
  const currentNote = (state: AppState) => {
    return state.dailyNote.dailyNote;
  };
  const currentUserNote = useAppSelector(currentNote);

  React.useEffect(() => {
    dispatch(getDailyNote({ id: "1" }));
  }, [dispatch]);

  React.useEffect(() => {
    if (currentUserNote) {
      setNote(currentUserNote);
    }
  }, [currentUserNote]);
  return (
     <View style={styles.container}>
      <Text >
      <NoteCard note={[currentUserNote]} onPress={function (): void {
         navigation.navigate("Home")
        } }></NoteCard>
      </Text>
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
    marginTop: 10,
  }

});
