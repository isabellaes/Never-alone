import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { RootStackParamList } from "../navigation/RootNavigator";
import { AppState, useAppDispatch, useAppSelector } from "../store/store";
import { TextInput } from "react-native-paper";
import { DailyNote } from "../utils/types";
import { createDailyNote, setCurrentDailyNote } from "../slices/dailynoteSlice";
import NoteCard from "../Componets/NoteCard";

type Props = NativeStackScreenProps<RootStackParamList, "DailyNote">;

export default function DailyNotes({ navigation }: Props) {
  const [dailyNote, setDailyNote] = React.useState<DailyNote[] | null>();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const currentNote = (state: AppState) => {
    return state.dailyNote.dailyNote;
  };

  const onTitleChanged = (title: string) => setTitle(title);
  const onContentChanged = (content: string) => setContent(content);

  const dispatch = useAppDispatch();
  const currentDailyNote = useAppSelector(currentNote);

  React.useEffect(() => {
    if (currentDailyNote) {
      setDailyNote(currentDailyNote);
    }
  }, [currentDailyNote]);

  function onPress() {
    if (title && content) {
      dispatch(
        createDailyNote({
          id: "15",
          title: title,
          content: content,
          UserId: "15",
          user: { id: "0", username: "test", password: "test", email: "test" },
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
        <TextInput
          value={title}
          onChangeText={onTitleChanged}
          placeholder="titel för dagen.."
          placeholderTextColor="#d978fa"
          underlineColorAndroid={"transparent"}
          multiline
          numberOfLines={1}
          maxLength={30}
          style={styles.title}
        />
        <TextInput
          value={content}
          onChangeText={onContentChanged}
          placeholder="Skriv några rader om dagen.."
          placeholderTextColor="#d978fa"
          underlineColorAndroid={"transparent"}
          underlineColor="transparent"
          multiline
          numberOfLines={6}
          maxLength={200}
          style={styles.content}
        />
    
          <Button onPress={onPress} title="Spara" color="#f0ccfc"></Button>

        {currentDailyNote?.map((note) => {
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
    marginTop: 20

  },
  title: {
    elevation: 5,
    shadowColor: "black",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    fontSize: 20,
    paddingTop:10,
  },
  content: {
    elevation: 30,
    shadowColor: "black",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    fontSize: 20,
    paddingTop:10
  },
});


