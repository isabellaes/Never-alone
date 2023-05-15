import * as React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { styles } from "../utils/styleSheet";

interface props {
  label: string[];
  dataset: number[];
}

export default function MoodTracker(props: props) {
  const linedata = {
    labels: props.label,
    datasets: [
      {
        data: props.dataset,
        strokeWidth: 2, // optional
      },
    ],
  };

  return (
    <View style={styles.moodcontent}>
      <View>
        <LineChart
          data={linedata}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          chartConfig={{
            backgroundColor: "#F3EEF6",
            backgroundGradientFrom: "#F3EEF6",
            backgroundGradientTo: "#F3EEF6",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 0) => `rgba(64, 64, 64, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          fromZero={true}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    </View>
  );
}


