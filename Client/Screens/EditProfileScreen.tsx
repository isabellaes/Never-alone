import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import ButtonCamera from "../Componets/ButtonCamera";
import ImageViewer from "../Componets/ImageViewer";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator";
import ButtonStandard from "../Componets/ButtonStandard";
import { Colors } from "react-native/Libraries/NewAppScreen";

type Props = NativeStackScreenProps<RootStackParamList, "EditProfile">;
const PlaceholderImage: any = require("../assets/adaptive-icon.png");

export default function EditProfile({ navigation }: Props) {
  const [selectedImage, setSelectedImage] = useState("");
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("Du valde ingen bild.");
    }
  };
  return (
    <>
      <Text style={{ ...styles.edit }}>Ändra Profil</Text>
      <TextInput
        style={{ ...styles.textInput, marginBottom: 20 }}
        placeholder="Ändra namn"
      ></TextInput>
      <View style={{ ...styles.buttonStandard }}>
        <ButtonStandard
          onPress={function (): void {
            navigation.navigate("Home");
          }}
          text={"spara"}
        ></ButtonStandard>
      </View>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageViewer
            placeholderImageSource={PlaceholderImage}
            selectedImage={selectedImage}
          />
        </View>
      </View>
      <View style={styles.footerContainer}>
        <ButtonCamera
          theme="primary"
          label="Välj bild"
          onPress={pickImageAsync}
        />
        <ButtonCamera label="Använd bilden" />
      </View>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  // Styles that are unchanged from previous step are hidden for brevity.
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
    marginBottom: 40,
  },
  textInput: {
    marginLeft: 25,
    marginRight: 25,
    backgroundColor: "#f9defa",
    borderRadius: 5,
    padding: 20,
  },
  edit: {
    fontSize: 30,
    marginLeft: 25,
    marginBottom: 20,
    paddingTop: 50,
  },
  buttonStandard: {
    display: "flex",
    alignItems: "center",
    marginBottom: 20
  },
});
