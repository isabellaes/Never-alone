import React, { useCallback } from "react";
import { Alert, Button, Linking, StyleSheet, View, Text } from "react-native";
import { styles } from "../utils/styleSheet";

const LearnMeditationURL = "https://www.mindful.org/how-to-meditate/";
const MeditationURL = "https://www.youtube.com/results?search_query=meditation";

type OpenURLButtonProps = {
  url: string;
  children: string;
};

const OpenURLButton = ({ url, children }: OpenURLButtonProps) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <View style={styles.buttontwo}>
      <Text onPress={handlePress}>{children} </Text>
    </View>
  );
};

const Meditation = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}></Text>
      <Text>
        <OpenURLButton url={MeditationURL}>
          Direkt till meditation
        </OpenURLButton>
        <Text >   </Text>
        <OpenURLButton url={LearnMeditationURL}>
          Mer om meditation..
        </OpenURLButton>
      </Text>
    </View>
  );
};

export default Meditation;
