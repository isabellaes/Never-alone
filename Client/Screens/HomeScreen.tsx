import { Link } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { RootStackParamList } from "../navigation/RootNavigator";
import { useAppDispatch } from "../store/store";
import { Modal, Portal } from "react-native-paper";
import OverviewCard from "../Componets/OverviewCard";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

//Fixa styling och lägg in passande bild till dailynote

export default function HomeScreen({ navigation }: Props) {
  const [ModalVisible, setModalVisible] = useState(false);

  React.useEffect(() => {
    setModalVisible(true);
  }, [setModalVisible]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewStyles}>
        <Text style={styles.citat}>"Dagens Citat eller peppande text"</Text>
        <Text style={styles.title}>Välkommen username</Text>
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
          uri=""
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
  },
  scrollViewStyles: {
    marginTop: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 50,
  },
  citat: {
    fontSize: 10,
    textAlign: "center",
  },
});

/*<Text style={{ fontSize: 25, marginBottom: 25 }}>Home Screen</Text>
      <Link to="/Login">
        <Text>Tryck här på länken för att komma till Login</Text>
      </Link>
      <Link to="/EditProfile">
        <Text>Tryck här på länken för att komma till Edir profile</Text>
      </Link>
      <Text style={{ fontSize: 20, marginTop: 25 }}>
        Tänker att denna sidan får innehålla det som är på översikt sidan?{" "}
      </Text>*/
