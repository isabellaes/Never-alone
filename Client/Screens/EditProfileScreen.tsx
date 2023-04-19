import React from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator";
import { Profile } from "../utils/types";
import { AppState, useAppDispatch, useAppSelector } from "../store/store";
import { getProfile, updateProfile } from "../store/profileSlice";
import { styles } from "../utils/styleSheet";
import { BottomBar } from "../Componets/BottomBar";
import FetchProfileImage from "../Componets/FetchProfileImage";

type Props = NativeStackScreenProps<RootStackParamList, "EditProfile">;

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

  function handleProfileSave(): void {
    if (newProfileName !== "") {
      dispatch(updateProfile({ ...profile, name: newProfileName }));
      setNewProfileName("");
    }
  }

  return (
    <View style={styles.containertwo}>
      <ScrollView style={{ width: "90%" }}>
        <Text style={styles.titletwo}>Användarnamn:  {profile?.name}</Text>
        <FetchProfileImage />
        <TextInput
          style={styles.citat}
          placeholder="Nytt användarnamn...."
          value={newProfileName}
          onChange={(event) => setNewProfileName(event.nativeEvent.text)}
        ></TextInput>
        <View style={styles.buttontwo}>
          <Text onPress={handleProfileSave}> Spara ditt användarnamn</Text>
        </View>
      </ScrollView>
      <BottomBar navigation={navigation} route={route}></BottomBar>
    </View>
  );
}

