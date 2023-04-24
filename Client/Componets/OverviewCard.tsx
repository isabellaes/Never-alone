import * as React from "react";
import { View } from "react-native";
import { Button, Card, Text } from "react-native-paper";

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
    <View style={{ padding: 25 }}>
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
    </View>
  );
}
