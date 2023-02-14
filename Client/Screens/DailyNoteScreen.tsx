import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import { RootStackParamList } from "../navigation/RootNavigator";
import { AppState, useAppDispatch, useAppSelector } from "../store/store";
import { TextInput } from "react-native-paper";
import { DailyNote } from "../utils/types";
import { createDailyNote, getDailyNote } from "../store/dailynoteSlice";
import NoteCard from "../Componets/NoteCard";

type Props = NativeStackScreenProps<RootStackParamList, "DailyNote">;

export default function DailyNotes({ navigation }: Props) {
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
  }, [dispatch]);

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
  console.log(onPress);

  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "95%" }}>
        <Text style={styles.text}> - {month} -</Text>
        <View>
          <TextInput
            value={title}
            onChangeText={onTitleChanged}
            placeholder="titel..."
            placeholderTextColor="black"
            underlineColorAndroid={"transparent"}
            multiline
            numberOfLines={1}
            maxLength={30}
            style={styles.title}
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
            style={styles.content}
          />
          <Button onPress={onPress} title="Spara" color="#d6b2bb"></Button>
        </View>

        <Text style={{ marginBottom: 40, marginTop: 5 }}></Text>
        {dailyNote?.map((note) => {
          //console.log(onPress);
          return (
            <Text key={note.id}>
              <NoteCard dailyNote={note}></NoteCard>
            </Text>
          );
        })}
      </ScrollView>
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
    marginTop: 20,
  },
  title: {
    flexDirection: "column",
    elevation: 10,
    shadowColor: "black",
    fontSize: 20,
    paddingTop: 5,
    marginTop: 30,
  },
  content: {
    flexDirection: "column",
    elevation: 30,
    shadowColor: "black",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    fontSize: 20,
    paddingTop: 10,
  },
  text: {
    fontSize: 20,
    backgroundColor: "#d6b2bb",
    marginRight: 190,
    padding: 10,
    borderRadius: 10,
    color: "white",
  },
});
