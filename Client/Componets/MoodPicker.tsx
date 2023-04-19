import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Dialog, Portal, Text } from "react-native-paper";

function Message(message: string) {}

export default function MoodPicker() {
  const [visible, setVisible] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const icons: string[] = ["😊", "👍", "👌", "👎", "😢"];

  function onPress(icon: string) {
    if (icon == icons[3] || icon == icons[4]) {
      setMessage(
        "Du är inte ensam! Behöver du extra stöd idag? ❤️ klicka på hjärtat!"
      );
      showDialog();
    } else if (icon == icons[2]) {
      setMessage(
        "Du kan alltid skriva av dig i dagboken! ❤️ Klicka på ikonen nere i hörnet."
      );
      showDialog();
    } else {
      setMessage("Du verkar ha en bra dag idag! ❤️");
      showDialog();
    }
  }
  return (
    <View style={styles.content}>
      <Button style={styles.button} onPress={() => onPress(icons[4])}>
        {icons[4]}
      </Button>
      <Button style={styles.button} onPress={() => onPress(icons[3])}>
        {icons[3]}
      </Button>
      <Button style={styles.button} onPress={() => onPress(icons[2])}>
        {icons[2]}
      </Button>
      <Button style={styles.button} onPress={() => onPress(icons[1])}>
        {icons[1]}
      </Button>
      <Button style={styles.button} onPress={() => onPress(icons[0])}>
        {icons[0]}
      </Button>
      <View>
        <Portal>
          <Dialog visible={visible}>
            <Dialog.Content>
              <Text variant="bodyMedium">{message}</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Ok</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 3,
    flex: 1,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    alignContent: "center",
  },
  content: {
    flexDirection: "row",
  },
});
