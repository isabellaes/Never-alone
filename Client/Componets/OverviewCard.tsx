import * as React from "react";
import { Button, Card, Text } from "react-native-paper";
import { ImageSource } from "react-native-vector-icons/Icon";

interface prop {
  title: string;
  description: string;
  onPress: () => void;
  uri: string;
}

export default function OverviewCard({
  title,
  description,
  onPress,
  uri,
}: prop) {
  return (
    <Card mode="elevated">
      <Card.Cover source={{ uri }} />
      <Card.Title title={title} />
      <Card.Content>
        <Text variant="bodyMedium">{description}</Text>
      </Card.Content>
      <Card.Actions>
        <Button onPress={onPress}>{title}</Button>
      </Card.Actions>
    </Card>
  );
}
