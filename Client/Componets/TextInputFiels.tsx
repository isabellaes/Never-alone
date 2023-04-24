import React from "react";
import { Button, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

interface TextInputFieldProps {
  title: string;
  content: string;
  onPress: () => void;
}

export default function TextInputField({
  title,
  content,
  onPress,
}: TextInputFieldProps) {
  return (
    <View>
      <TextInput
        value={title}
        onChangeText={onPress}
        placeholder="titel"
        placeholderTextColor="#bebebe"
        underlineColorAndroid={"transparent"}
        underlineColor="transparent"
        style={styles.textInput}
      />
      <TextInput
        value={content}
        onChangeText={onPress}
        placeholder="titel"
        placeholderTextColor="#bebebe"
        underlineColorAndroid={"transparent"}
        underlineColor="transparent"
        style={styles.textInput}
      />
      <Button
        onPress={onPress}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    width: "92%",
    elevation: 5,
    shadowColor: "black",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    fontSize: 20,
    paddingHorizontal: 20,
  },
});