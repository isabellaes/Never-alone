import React from "react";
import { View, Text } from "react-native";
import { Button, Card } from "react-native-paper";
import { DailyNote } from "../utils/types";
import { styles } from "../utils/styleSheet";

interface Props {
  dailyNote: DailyNote;
  onDelete: (id: string) => void;
  child : string
}

export default function NoteCard({ dailyNote, onDelete, child  }: Props) {
  const handleDelete = () => onDelete(dailyNote.id);
  return (
    <View style={{ paddingTop: 20, paddingLeft: 20}}>
      <Text>
        <Card style={{height: 150, width: 350, borderRadius:10 }}>
          <Card.Title style={styles.title}  title={dailyNote.title} />
          <Card.Content style={styles.citat} >
            <Text>{dailyNote.content}</Text>
          </Card.Content>
          <Button onPress={handleDelete} color="#c48a9f">{child}</Button>
        </Card>
      </Text>
    </View>
  );
}


