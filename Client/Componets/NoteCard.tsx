import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Card } from "react-native-paper";
import { DailyNote } from "../utils/types";

interface Props {
  dailyNote: DailyNote;
}

export default function NoteCard({ dailyNote }: Props) {
  return (
    <View style={{ paddingTop: 30, paddingLeft: 20}}>
      <Text>
        <Card style={{height: 150, width: 350}}>
          <Card.Title style={styles.title}  title={dailyNote.title} />
          <Card.Content style={styles.content} >
            <Text>{dailyNote.content}</Text>
          </Card.Content>
          <Card.Actions>
          </Card.Actions>
        </Card>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    backgroundColor: "#dedcdd", 
  },
    content: {
    
       marginTop:10
      },
});
