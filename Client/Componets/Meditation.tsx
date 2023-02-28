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

  return <Button color="#B69EC3" title={children} onPress={handlePress} />;
};

const Meditation = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}></Text>
      <OpenURLButton url={MeditationURL}>Direkt till meditation</OpenURLButton>
       <Text style={styles.texttvå}> eller </Text>
      <OpenURLButton  url={LearnMeditationURL}>Lära dig mer om meditation</OpenURLButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  text: {
   
   
    
  },
  texttvå: {
   marginBottom: 5,
    fontSize: 20
  },
});

export default Meditation;

