import React, {useCallback} from 'react';
import {Alert, Button, Linking, StyleSheet, View, Text} from 'react-native';

const LearnMeditationURL = 'https://www.mindful.org/how-to-meditate/';
const MeditationURL = 'https://www.youtube.com/results?search_query=meditation';

type OpenURLButtonProps = {
  url: string;
  children: string;
};

const OpenURLButton = ({url, children}: OpenURLButtonProps) => {
  const handlePress = useCallback(async () => {
  
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

const Meditation = () => {
  return (
    <View style={styles.container}>
      <OpenURLButton url={LearnMeditationURL}>Lär dig mer om meditation</OpenURLButton>
      <Text style={styles.text}>Landa i nuet en stund ❤️</Text>
      <OpenURLButton url={MeditationURL}>Direkt till meditation</OpenURLButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    marginBottom:20,
    marginTop:20,
    fontSize: 18
    
  }
});

export default Meditation;

