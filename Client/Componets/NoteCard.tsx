import * as React from "react";
import { Button, Card, Text } from "react-native-paper";
import MoodPicker from "./MoodPicker";
import { View, StyleSheet, } from "react-native";
import { DailyNote } from "../utils/types";
import MultilineTextInputExample from "./TextInput";


interface props {
  note: DailyNote[];
  onPress:  () => void;
}

const NoteCard = ({ note, onPress }: props) => (
  <View>
    {note.map((n) => {
      return (
        <Card key={n.userId} style={styles.card}>
          <Card.Content>
            <View style={styles.title}>
            <Text variant="titleLarge" >{n.title}</Text>
            </View>
            <Text  variant="bodyMedium" >
                <View>
                
              <MultilineTextInputExample></MultilineTextInputExample>
              </View>
            </Text>
          </Card.Content>
          <MoodPicker></MoodPicker>
          <Card.Actions>
           
            <Button onPress={onPress}>spara</Button>
          </Card.Actions>
        </Card>
      );
    })}
  </View>
);

export default NoteCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#faefff",
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
    margin: 10, 
 
  },
  title: {
    backgroundColor: "#f1ddf9",
    padding: 20,
    marginBottom: 50
  
  }
});
