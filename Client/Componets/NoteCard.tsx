import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Card } from "react-native-paper";
import { DailyNote } from "../utils/types";

interface Props {
  dailyNote: DailyNote;
}

export default function NoteCard({ dailyNote }: Props) {
  return (
    <View style={styles.card}>
      <Text>
        <Card>
          <Card.Title style={styles.title} title={dailyNote.title} />
          <Card.Content style={styles.content}>
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
  // card: {
  //   flex: 1,
  //   justifyContent: 'space-between',
  //   backgroundColor: '#fff',
  //   padding: 20,
  //   margin: 10,
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   alignContent: "center",
  //   marginTop: 10,
  // },
  // title: {
  //   backgroundColor: "#f3e8fa",
  //   paddingHorizontal: 200,
  //   padding: 10,
  //   marginBottom: 50,
  //   paddingLeft: 100,
  //   paddingRight: 100,
  // },
  //   content: {
  //     backgroundColor: "#f3e8fa",
  //     // padding: 50,
  //     marginBottom: 50,
  //     paddingLeft: 100,
  //     paddingRight: 100
  //     },
});
