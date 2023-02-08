import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  FlatList,
} from "react-native";
import { RootStackParamList } from "../navigation/RootNavigator";
import { AppState, useAppDispatch, useAppSelector } from "../store/store";

import { TextInput } from "react-native-paper";
import { DailyNote } from "../utils/types";
import { createDailyNote, setCurrentDailyNote } from "../slices/dailynoteSlice";


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
      //const dailyNote: DailyNote = {id: "1", title:title, content:content, datetime: "2023-05-08", userId: 1, user: {id: 0, username: "test", password: "test", email: "test"} }
      dispatch(
        createDailyNote({
          id: "1",
          title: title,
          content: content,
          UserId: "1",
          user: { id: "0", username: "test", password: "test", email: "test" },
        })
      );
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "95%" }}>
        <View>
          <View>
            <Text>
              <TextInput
                value={title}
                onChangeText={onTitleChanged}
                placeholder="titel"
                placeholderTextColor="#bebebe"
                underlineColorAndroid={"transparent"}
                underlineColor="transparent"
                style={styles.textInput}
              />
              <TextInput
                value={content}
                onChangeText={onContentChanged}
                placeholder="titel"
                placeholderTextColor="#bebebe"
                underlineColorAndroid={"transparent"}
                underlineColor="transparent"
                style={styles.textInput}
              />
              <Button
                onPress={onPress}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              ></Button>
            </Text>
          </View>
          {/* <View>
            if(dailyNote)
            {
              <FlatList
                data={dailyNote}
                renderItem={({ note }) => (
                  <NotesList dailyNote={note}></NotesList>
                )}
              ></FlatList>
            }
          </View> */}
          {/* <FlatList></FlatList> */}
        </View>
      </ScrollView>
    </View>
  );
}

// {dailyNote?.map((note) => {
//   <NotesList dailyNote={note}></NotesList>;
// })}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
  },
  textInput: {
    width: "92%",
    elevation: 5,
    shadowColor: "black",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    fontSize: 20,
    paddingHorizontal: 20,
  },
});
