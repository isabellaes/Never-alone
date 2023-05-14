import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { RootStackParamList } from "../navigation/RootNavigator";
import { useAppDispatch, useAppSelector } from "../store/store";
import OverviewCard from "../Componets/OverviewCard";
import { AppState } from "../store/store";
import { Profile } from "../utils/types";
import { styles } from "../utils/styleSheet";
import { BottomBar } from "../Componets/BottomBar";
import { getProfile } from "../store/profileSlice";
import ButtonStandard from "../Componets/ButtonStandard";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation, route }: Props) {
  const dispatch = useAppDispatch();
  const [profile, setProfile] = React.useState<Profile | null>();

  const currentProfile = (state: AppState) => {
    return state.profile.profile;
  };

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  const currentUserProfile = useAppSelector(currentProfile);

  React.useEffect(() => {
    if (currentUserProfile) {
      setProfile(currentUserProfile);
    }
  }, [currentUserProfile]);

  function onPress() {
    navigation.navigate("MoodTracker");
  }

  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "100%" }}>
        <Text style={styles.title}>Välkommen {profile?.name}</Text>
        <View style={{ display: "flex", alignItems: "center", marginTop: 20 }}>
          <ButtonStandard onPress={onPress} text="MoodTracker"></ButtonStandard>
        </View>

        <OverviewCard
          title="Komma ihåg"
          description="Minnet är bra men kort ibland.."
          onPress={() => navigation.navigate("Todo")}
          uri="https://cdn.pixabay.com/photo/2021/10/15/13/21/take-note-6712578_960_720.png"
        ></OverviewCard>

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
