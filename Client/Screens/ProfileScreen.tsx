import { Link } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { RootStackParamList } from "../navigation/RootNavigator";
import { createProfile, getProfile } from "../store/profileSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import { Profile } from "../utils/types";
import { AppState } from "../store/store";
import OverviewCard from "../Componets/OverviewCard";
import ButtonStandard from "../Componets/ButtonStandard";
//import { BottomBar } from "../Componets/BottomBar";

type Props = NativeStackScreenProps<RootStackParamList, "Profile">;

export default function ProfileScreen({ navigation, route }: Props) {
  const [profile, setProfile] = React.useState<Profile | null>();

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
    <View>
      <Text style={{ fontSize: 25, marginBottom: 25 }}>Profile Screen</Text>
      <Text>{profile?.name}</Text>
    </View>
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
    marginBottom: 20,
  },
});
