import { Link } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RootStackParamList } from "../navigation/RootNavigator";
import { TextInput } from "react-native-paper";
import ButtonStandard from "../Componets/ButtonStandard";
import { useAppDispatch } from "../store/store";
import { login } from "../store/authSlice";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export default function LogInScreen({ navigation }: Props) {
  const [userName, setUserName] = React.useState<string | null>(null);
  const [passWord, setPassword] = React.useState<string | null>(null);
  const dispatch = useAppDispatch();

  const onUserNameChanged = (username: string) => setUserName(username);
  const onPasswordChanged = (password: string) => setPassword(password);

  function logInUser() {
    if (userName && passWord) {
      dispatch(login({ username: userName, password: passWord }));
      navigation.navigate("Home");
    }
  }

  return (
    <View style={{ ...styles.container }}>
      <Text style={{ ...styles.loggaIn }}>Logga in</Text>
      <TextInput
        style={{ ...styles.textInput, marginBottom: 40 }}
        mode="outlined"
        label="Användarnamn"
        placeholder="E-post"
        right={<TextInput.Affix text="/50" />}
        onChangeText={onUserNameChanged}
      />
      <TextInput
        style={{ ...styles.textInput }}
        mode="outlined"
        label="Ange ditt lösen ord"
        placeholder="Minst 8 tecken"
        right={<TextInput.Affix text="/15" />}
        onChangeText={onPasswordChanged}
      />
      <View style={{ ...styles.buttonStandard }}>
        <ButtonStandard onPress={logInUser} text={"Logga in"}></ButtonStandard>
      </View>
      <View style={{ ...styles.nyttKonto }}>
        <ButtonStandard
          onPress={function (): void {
            navigation.navigate("Register");
          }}
          text={"Skapa nytt konto"}
        ></ButtonStandard>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  loggaIn: {
    fontSize: 30,
    marginLeft: 10,
    marginBottom: 50,
  },
  textInput: {
    marginLeft: 10,
    marginRight: 10,
  },
  nyttKonto: {
    display: "flex",
    alignItems: "center",
    marginTop: 30,
  },
  buttonStandard: {
    display: "flex",
    alignItems: "center",
    marginTop: 40,
  },
});
//modal som visar info om appen klicka på en ikon för att se den
/* <Portal>
          <Modal
            visible={ModalVisible}
            onDismiss={() => setModalVisible(false)}
            children={undefined}
          ></Modal>
        </Portal> */
