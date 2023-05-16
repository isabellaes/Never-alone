import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, Text, ScrollView, Button } from "react-native";
import { RootStackParamList } from "../navigation/RootNavigator";
import { AppState, useAppDispatch, useAppSelector } from "../store/store";
import { TextInput } from "react-native-paper";
import { DailyNote } from "../utils/types";
import {
  createDailyNote,
  deleteDailyNote,
  getDailyNote,
} from "../store/dailynoteSlice";
import NoteCard from "../Componets/NoteCard";
import { BottomBar } from "../Componets/BottomBar";
import { styles } from "../utils/styleSheet";
import SelectedImage from "../Componets/SelectedImage";

type Props = NativeStackScreenProps<RootStackParamList, "DailyNote">;

export default function DailyNotes({ navigation, route }: Props) {
  const [dailyNote, setDailyNote] = React.useState<DailyNote[] | null>();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const date = new Date();
  let month = date.toDateString();

  const currentNote = (state: AppState) => {
    return state.dailyNote.dailyNote;
  };

  const onTitleChanged = (title: string) => setTitle(title);
  const onContentChanged = (content: string) => setContent(content);

  const dispatch = useAppDispatch();
  const currentDailyNote = useAppSelector(currentNote);

  React.useEffect(() => {
    dispatch(getDailyNote());
  }, []);
  React.useEffect(() => {
    if (currentDailyNote) {
      setDailyNote(currentDailyNote);
    }
  }, [currentDailyNote]);

  function onPress() {
    if (title && content) {
      dispatch(
        createDailyNote({
          title: title,
          content: content,
        })
      );
      setTitle("");
      setContent("");
    }
  }

  const handleDeleteNote = (id: string) => {
    if (dailyNote && id) {
      dispatch(deleteDailyNote({ id: id }));
      dispatch(getDailyNote());
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "95%", marginBottom: 35 }}>
        <Text style={styles.title}>Dagbok</Text>
        <SelectedImage
          stylescontainer={styles.container}
          stylesView={{ alignItems: "center", marginTop: 20, marginBottom: 20 }}
          stylesimage={styles.imagesmall}
        />
        <Text style={styles.citat}> - {month} -</Text>
        <View>
          <TextInput
            value={title}
            onChangeText={onTitleChanged}
            placeholder="Titel"
            placeholderTextColor="grey"
            style={styles.citat}
          />
          <TextInput
            value={content}
            onChangeText={onContentChanged}
            placeholder="Skriv några rader om dagen..."
            placeholderTextColor="grey"
            underlineColorAndroid={"transparent"}
            underlineColor="transparent"
            multiline
            numberOfLines={6}
            maxLength={200}
            style={styles.citat}
          />
          <Button onPress={onPress} title="Spara" color="#c48a9f"></Button>
        </View>

        {dailyNote?.map((note) => {
          return (
            <Text key={note.id}>
              <NoteCard
                dailyNote={note}
                onDelete={handleDeleteNote}
                child={"ta bort"}
              ></NoteCard>
            </Text>
          );
        })}
      </ScrollView>
      <BottomBar navigation={navigation} route={route}></BottomBar>
    </View>
  );
}
