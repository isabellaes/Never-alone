import { Link } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { RootStackParamList } from "../navigation/RootNavigator";
import { useAppDispatch, useAppSelector } from "../store/store";
import OverviewCard from "../Componets/OverviewCard";
import MoodPicker from "../Componets/MoodPicker";
import { Button } from "react-native-paper";
import { logout } from "../store/authSlice";
import { AppState } from "../store/store";
import { User } from "../utils/types";
//import { BottomBar } from "../Componets/BottomBar";
type Props = NativeStackScreenProps<RootStackParamList, "Home">;

//Fixa styling och lägg in passande bild till dailynote

export default function HomeScreen({ navigation, route }: Props) {
  const [user, setUser] = React.useState<User | null>();
  const dispatch = useAppDispatch();
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
      <ScrollView style={{ width: "95%" }}>
        <Button mode="contained" onPress={() => dispatch(logout())}>
          Logga ut
        </Button>
        <Text style={styles.citat}>"Dagens Citat eller peppande text"</Text>
        <Text style={styles.title}>Välkommen {user?.username}</Text>
        <Text style={styles.title}>Hur mår du idag?</Text>

        <MoodPicker />

        <OverviewCard
          title="Meditation"
          description="Meditationer och övningar"
          onPress={() => navigation.navigate("Meditation")}
          uri="https://freepngimg.com/thumb/categories/1786.png"
        ></OverviewCard>
        <OverviewCard
          title="Dagbok"
          description="Skriv ner dina tankar"
          onPress={() => navigation.navigate("DailyNote")}
          uri="https://freepngimg.com/thumb/categories/1786.png"
        ></OverviewCard>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-between",
  },

  title: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    padding: 5,
  },
  citat: {
    fontSize: 15,
    textAlign: "center",
    padding: 15,
  },
});
