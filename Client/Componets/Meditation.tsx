import React, { useCallback } from "react";
import { Alert, Linking, View, Text, TouchableOpacity } from "react-native";
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
    <TouchableOpacity style={styles.buttontwo} onPress={handlePress}>
      <Text>{children} </Text>
    </TouchableOpacity>
  );
};

const Meditation = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}></Text>
      <View style={{flexDirection: "row"}}>
        <OpenURLButton url={MeditationURL}>
          Direkt till meditation
        </OpenURLButton>
        <View style={{ width: 10}}></View>
        <OpenURLButton url={LearnMeditationURL}>
          Mer om meditation..
        </OpenURLButton>
      </View>
    </View>
  );
};

export default Meditation;
