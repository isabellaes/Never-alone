import { StatusBar } from "expo-status-bar";
import React from "react";
import {  TextInput, View, Text } from "react-native";
import ButtonCamera from "../Componets/ButtonCamera";
import ImageViewer from "../Componets/ImageViewer";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator";
import ButtonStandard from "../Componets/ButtonStandard";
import { Profile } from "../utils/types";
import { AppState, useAppDispatch, useAppSelector } from "../store/store";
import { getProfile, updateProfile } from "../store/profileSlice";
import { styles } from "../utils/styleSheet";
import { BottomBar } from "../Componets/BottomBar";

type Props = NativeStackScreenProps<RootStackParamList, "EditProfile">;
const PlaceholderImage: any = require("../assets/adaptive-icon.png");

export default function EditProfile({ navigation, route }: Props) {
  const [profile, setProfile] = React.useState<Profile | null>();
  const [newProfileName, setNewProfileName] = React.useState<string>("");

  const dispatch = useAppDispatch();
  const currentProfile = (state: AppState) => {
    return state.profile.profile;
  };
  const currentUserProfile = useAppSelector(currentProfile);

  React.useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  React.useEffect(() => {
    if (currentUserProfile) {
      setProfile(currentUserProfile);
    }
  }, [currentUserProfile]);

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

  function handleProfileSave(): void {
    if (newProfileName !== "") {
      dispatch(updateProfile({ ...profile, name: newProfileName }));
      setNewProfileName("")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={{marginTop: 20, marginBottom:20, backgroundColor: "#f9defa", paddingLeft:100, paddingRight: 100, borderRadius: 15}}>
        <Text style={styles.title}>{profile?.name}</Text>
        </Text>
        <Text style={{marginBottom:50}}>Här nedan kan du ändra ditt användarnamn</Text>

        <TextInput
          style={styles.citat}
          placeholder="Skriv namn.."
          value={newProfileName}
          onChange={(event) => setNewProfileName(event.nativeEvent.text)}
          ></TextInput>
        <View style={styles.buttonStandard}>
          <ButtonStandard
            onPress={handleProfileSave}
            text={"spara"}
          ></ButtonStandard>
        </View>
      <View style={styles.container}>
        <View style={{ width: "50%", height: "65%" }}>
          <ImageViewer
            placeholderImageSource={PlaceholderImage}
            selectedImage={selectedImage}
          />
        </View>
      </View>
      <View>
        <ButtonCamera
          theme="primary"
          label="Välj bild"
          onPress={pickImageAsync}
        />
        <ButtonCamera />
      </View>
      <StatusBar style="auto" />
      <BottomBar navigation={navigation} route={route}></BottomBar>
      
    </View>
  );
}

