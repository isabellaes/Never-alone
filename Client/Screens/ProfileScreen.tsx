import { Link } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { RootStackParamList } from "../navigation/RootNavigator";
import { getProfile } from "../slices/profileSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import { Profile } from "../utils/types";
import { AppState } from "../store/store";

type Props = NativeStackScreenProps<RootStackParamList, "Profile">;

export default function ProfileScreen({ navigation }: Props) {
  const [profile, setProfile] = React.useState<Profile | null>();

  const dispatch = useAppDispatch();
  const currentProfile = (state: AppState) => {
    return state.profile.profile;
  };
  const currentUserProfile = useAppSelector(currentProfile);

  React.useEffect(() => {
    dispatch(getProfile({ id: "1" }));
  }, [dispatch]);

  console.log(profile);

  React.useEffect(() => {
    if (currentUserProfile) {
      setProfile(currentUserProfile);
    }
  }, [currentUserProfile]);

  return (
    <View>
      <Text style={{ fontSize: 25, marginBottom: 25 }}>Profile Screen</Text>
      <Text>{profile?.name}</Text>
      <Link to="/EditProfile" style={{ marginBottom: 25 }}>
        <Text>Tryck här på länken för att komma till EditProfile</Text>
      </Link>
      <Link to="/Home">
        <Text>Tryck här på länken för att komma till Home</Text>
      </Link>
    </View>
  );
}
