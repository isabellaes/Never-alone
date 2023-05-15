import React from "react";
import { Button, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { styles } from "../utils/styleSheet";

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
