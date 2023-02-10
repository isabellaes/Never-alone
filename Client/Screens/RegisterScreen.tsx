import { Link } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RootStackParamList } from "../navigation/RootNavigator";
import { TextInput } from "react-native-paper";
import ButtonStandard from "../Componets/ButtonStandard";
import { useAppDispatch } from "../store/store";
import { register } from "../store/authSlice";
import { createProfile } from "../store/profileSlice";

type Props = NativeStackScreenProps<RootStackParamList, "Register">;

export default function RegisterScreen({ navigation }: Props) {
  const [userName, setUserName] = React.useState<string | null>(null);
  const [passWord, setPassword] = React.useState<string | null>(null);
  const [email, setEmail] = React.useState<string | null>(null);
  const dispatch = useAppDispatch();

  const onUserNameChanged = (username: string) => setUserName(username);
  const onPasswordChanged = (password: string) => setPassword(password);
  const onEmailChanged = (email: string) => setEmail(email);

  function registerUser() {
    if (userName && passWord && email) {
      dispatch(
        register({ email: email, username: userName, password: passWord })
      );
      dispatch(createProfile({ name: userName }));

      navigation.navigate("Login");
    }
  }
  return (
    <View style={{ ...styles.container }}>
      <Text style={{ ...styles.loggaIn }}>Registrera nytt konto</Text>
      <TextInput
        style={{ ...styles.textInput, marginBottom: 40 }}
        mode="outlined"
        label="Namn"
        placeholder="Förnamn och Efternamn"
        right={<TextInput.Affix text="/50" />}
        onChangeText={onUserNameChanged}
      />
      <TextInput
        style={{ ...styles.textInput, marginBottom: 40 }}
        mode="outlined"
        label="Användarnamn"
        placeholder="E-post"
        right={<TextInput.Affix text="/50" />}
        onChangeText={onEmailChanged}
      />
      <TextInput
        style={{ ...styles.textInput }}
        mode="outlined"
        label="Ange ditt lösen ord"
        placeholder="Minst 8 tecken"
        right={<TextInput.Affix text="/15" />}
        onChangeText={onPasswordChanged}
      />
      <View style={{ ...styles.nyttKonto }}>
        <ButtonStandard
          onPress={registerUser}
          text={"Skapa konto"}
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
    marginTop: 50,
  },
  buttonStandard: {
    display: "flex",
    alignItems: "center",
    marginTop: 40,
  },
});
