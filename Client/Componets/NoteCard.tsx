import React, { useState } from "react";
import { Section } from "react-native-paper/lib/typescript/components/Drawer/Drawer";
import { useAppSelector } from "../store/store";
import { View, Text, StyleSheet } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import { DailyNote } from "../utils/types";


interface Props {
  dailyNote: DailyNote
}

export default function NoteCard({dailyNote}: Props) {
   return(
    <View>
      <Card>
        <Card.Title title={dailyNote.title} />
        <Card.Content>
         <Text>{dailyNote.content}</Text>
        </Card.Content>
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: "#faefff",
//     flex: 1,
//     justifyContent: "space-between",
//     padding: 20,
//     margin: 10,
//   },
//   title: {
//     backgroundColor: "#f1ddf9",
//     padding: 20,
//     marginBottom: 50,
//   },
// });

