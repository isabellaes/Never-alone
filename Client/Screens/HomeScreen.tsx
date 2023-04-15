import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { RootStackParamList } from "../navigation/RootNavigator";
import { useAppDispatch, useAppSelector } from "../store/store";
import OverviewCard from "../Componets/OverviewCard";
import MoodPicker from "../Componets/MoodPicker";
import { AppState } from "../store/store";
import { Profile } from "../utils/types";
import { styles } from "../utils/styleSheet";
import { BottomBar } from "../Componets/BottomBar";
import { getProfile } from "../store/profileSlice";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation, route }: Props) {
  const [profile, setProfile] = React.useState<Profile | null>();

  const currentProfile = (state: AppState) => {
    return state.profile.profile;
  };
  const dispatch = useAppDispatch();
  dispatch(getProfile());
  const currentUserProfile = useAppSelector(currentProfile);

  React.useEffect(() => {
    if (currentUserProfile) {
      setProfile(currentUserProfile);
    }
  }, [currentUserProfile]);

  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "100%" }}>
        <Text style={styles.title}>Välkommen {profile?.name}</Text>
        <Text style={styles.title}>Hur mår du idag?</Text>

        <MoodPicker />

        <OverviewCard
          title="Meditation"
          description="Meditationer och övningar"
          onPress={() => navigation.navigate("Meditation")}
          uri="https://cdn.pixabay.com/photo/2020/03/21/19/27/sea-4955005_960_720.jpg"
        ></OverviewCard>
        <OverviewCard
          title="Dagbok"
          description="Skriv ner dina tankar"
          onPress={() => navigation.navigate("DailyNote")}
          uri="https://img.freepik.com/premium-photo/open-blank-diary-pencils-purple-background_428823-444.jpg?w=360"
        ></OverviewCard>
      </ScrollView>

      <BottomBar navigation={navigation} route={route}></BottomBar>
    </View>
  );
}
