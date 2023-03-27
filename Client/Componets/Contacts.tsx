import React from "react";
import { View, Text, Linking, TouchableHighlight } from "react-native";
import { styles } from "../utils/styleSheet";

interface ContactProps {
      name: string,
      number: string,
      url: string
    } 

const Contacts = ({name, number, url}:ContactProps) => {
  const press = () => {
    Linking.openURL(url)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titletwo}>{name} Kontakt: {number}</Text>
      <TouchableHighlight onPress={press} underlayColor="#f1c2fb" style={styles.buttontwo}> 
      <Text style={{fontSize: 15, marginBottom: 15, color: "purple", marginLeft: 5}}>{url}</Text>
      </TouchableHighlight>
    
    </View>
  );
};

export default Contacts;


