import { Link } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Alert,
  ScrollView,
} from "react-native";
import { RootStackParamList } from "../navigation/RootNavigator";
import { getProfile } from "../store/profileSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import { Profile } from "../utils/types";
import { AppState } from "../store/store";
import { BottomBar } from "../Componets/BottomBar";
import { styles } from "../utils/styleSheet";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = NativeStackScreenProps<RootStackParamList, "Profile">;

export default function ProfileScreen({ navigation, route }: Props) {
  const [profile, setProfile] = React.useState<Profile | null>();
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const getSelectedImage = async () => {
      try {
        const selectedImage = await AsyncStorage.getItem("selectedImage");
        if (selectedImage != null) {
          setSelectedImageUrl(selectedImage);
        }
      } catch {
        Alert.alert("Något gick fel, försök igen");
      }
    };
    getSelectedImage();
  }, []);

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

  return (
    <View style={styles.containertwo}>
      <ScrollView style={{ width: "90%" }}>
        <Text style={styles.title}>{profile?.name}</Text>
        {selectedImageUrl && (
          <Image
            style={styles.selectedImage}
            source={{ uri: selectedImageUrl }}
          ></Image>
        )}
        <Text style={{marginTop: 50}} ></Text>
        <Link to="/EditProfile" style={styles.titleProfile}>
          <Text >Redigera profilsidan</Text>
        </Link>
        
      </ScrollView>
      <BottomBar navigation={navigation} route={route}></BottomBar>
    </View>
  );
}

