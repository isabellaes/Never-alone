import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { RootStackParamList } from "../navigation/RootNavigator";
import { Card, TextInput } from "react-native-paper";
import ButtonStandard from "../Componets/ButtonStandard";
import { DailyNote } from "../utils/types";
import { AppState, useAppDispatch, useAppSelector } from "../store/store";
import { getDailyNote } from "../slices/dailynoteSlice";
import { Picker } from "@react-native-picker/picker";

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
    <ScrollView style={{ ...styles.container }}>
      <View>
        <Card style={{ ...styles.card }}>
          <Text style={{ ...styles.title }}>Dag anteckningar</Text>
          <Picker style={{...styles.picker}}
            selectedValue={selectedEmoji}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedEmoji(itemValue)
            }
          >
            <Picker.Item label="ledsen" value={currentUserNote.title} />
            <Picker.Item label="arg" value={currentUserNote.title} />
            <Picker.Item label="lite nere" value={currentUserNote.title} />
            <Picker.Item label="okey" value={currentUserNote.title} />
            <Picker.Item label="glad" value={currentUserNote.title} />
            <Picker.Item label="lycklig" value={currentUserNote.title} />
          </Picker>
          <Text style={styles.text}>Några rader om dagen</Text>
          <TextInput
            style={{ ...styles.textInput, marginBottom: 40 }}
            label={note?.content}
            right={<TextInput.Affix text="/50" />}
          />
          <View style={{ ...styles.nyttKonto }}>
            <ButtonStandard 
              onPress={function (): void {
                navigation.navigate("Home");
              }}
              text={"Spara"}
            ></ButtonStandard>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ad6ae9",
  },
  container: {
    paddingTop: 50,
    borderradius: 25,
    padding: 20,
  },
  title: {
    fontSize: 30,
    marginLeft: 10,
  },
  textInput: {
    marginLeft: 10,
    marginRight: 10,
    paddingBottom:50,
    borderRadius: 5,
    marginTop: 20
  },
  nyttKonto: {
    display: "flex",
    alignItems: "center",
    marginTop: 50,
  },
  buttonStandard: {
    display: "flex",
    alignItems: "center",
   
  },
  picker: {
    width: 150,
    marginLeft: 10


  },
  text: {
    marginLeft:10,
    marginTop: 20
  }
});
