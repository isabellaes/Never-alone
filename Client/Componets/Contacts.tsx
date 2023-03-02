import React from "react";
import { View, Text, Linking, TouchableHighlight } from "react-native";

interface ContactProps {
      name: string,
      number: number,
      url: string
    } 

const Contacts = ({name, number, url}:ContactProps) => {
  const press = () => {
    Linking.openURL(url)
  }
  return (
    <View>
      <Text style={{fontSize: 20, marginBottom: 10, marginLeft: 5}}>{name} Kontakt: {number}</Text>
      <TouchableHighlight onPress={press}> 
      <Text style={{fontSize: 15, marginBottom: 15, color: "purple", marginLeft: 5}}>{url}</Text>
      </TouchableHighlight>
    
    </View>
  );
};

export default Contacts;
