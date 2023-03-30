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
      <Text style={{fontSize: 15, marginBottom: 5, marginTop: 10}}>{name} Kontakt: {number}</Text>
      <TouchableHighlight onPressIn={press} underlayColor="#f1c2fb" style={{width: "95%"}}> 
      <Text style={styles.buttontwo}>{url}</Text>
      </TouchableHighlight>
    
    </View>
  );
};

export default Contacts;


