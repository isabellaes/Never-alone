import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { RootStackParamList } from "../navigation/RootNavigator";
import { useAppDispatch, useAppSelector } from "../store/store";
import OverviewCard from "../Componets/OverviewCard";
import MoodPicker from "../Componets/MoodPicker";
import { AppState } from "../store/store";
import { User } from "../utils/types";
import { styles } from "../utils/styleSheet";
import { BottomBar } from "../Componets/BottomBar";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation, route }: Props) {
  const [user, setUser] = React.useState<User | null>();

  const currentUser = (state: AppState) => {
    return state.user.user;
  };
  const getcurrentUser = useAppSelector(currentUser);

  React.useEffect(() => {
    if (getcurrentUser) {
      setUser(getcurrentUser);
    }
  }, [getcurrentUser]);

  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "100%" }}>
        <Text style={styles.citat}>"Dagens Citat eller peppande text"</Text>
        <Text style={styles.title}>Välkommen {user?.username}</Text>
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
