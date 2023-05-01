import * as React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Button, Dialog, Portal, Text } from "react-native-paper";
import { Mood } from "../utils/types";
import { LineChart, PieChart } from "react-native-chart-kit";

interface props {
  icon: string;
  number: number;
}

export default function MoodTracker(props: props) {
  const data = { props };

  return (
    <View style={styles.content}>
      <Text>{props.number}</Text>
      <Text>{props.icon}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 3,
    flex: 1,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    alignContent: "center",
  },
  content: {
    flexDirection: "row",
  },
});
