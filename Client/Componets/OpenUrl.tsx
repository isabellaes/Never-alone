import React, {useCallback} from 'react';
import {Alert, Linking, TouchableOpacity, Text} from 'react-native';


type OpenURLProps = {
url: string;


};

const OpenURL = ({url}: OpenURLProps) => {
const handlePress = useCallback(async () => {
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    await Linking.openURL(url);
  } else {
    Alert.alert(`Don't know how to open this URL: ${url}`);
  }
}, [url]);

return <><TouchableOpacity style={{  padding: 10, borderRadius: 10 }} onPress={handlePress}>
  <Text style={{ color: 'purple', textDecorationLine: "underline"}}>Tryck för att komma till sidan</Text>
</TouchableOpacity></>;

};


export default OpenURL;