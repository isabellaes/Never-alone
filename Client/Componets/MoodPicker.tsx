/*import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Dialog, Portal, Text } from "react-native-paper";
import { Mood } from "../utils/types";
import { setCurrentMood } from "../store/moodTrackerSlice";

export default function MoodPicker() {
  const [visible, setVisible] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const icons: Mood[] = [
    { icon: "😊", date: new Date() },
    { icon: "👍", date: new Date() },
    { icon: "👌", date: new Date() },
    { icon: "👎", date: new Date() },
    { icon: "😢", date: new Date() },
  ];

  function onPress(icon: string) {
    setMessage("Du har nu registrerat dagens mood");
    showDialog();

    var mood: Mood = { icon: icon, date: new Date() };
    //setCurrentMood(mood);

    /*if (icon == icons[3].icon || icon == icons[4].icon) {
      setMessage(
        "Du är inte ensam! Behöver du extra stöd idag? ❤️ klicka på hjärtat!"
      );
      showDialog();
    } else if (icon == icons[2].icon) {
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
      {icons.map((element) => (
        <Button style={styles.button} onPress={() => onPress(element.icon)}>
          {icons[4].icon}
        </Button>
      ))}
      <Button style={styles.button} onPress={() => onPress(icons[4].icon)}>
        {icons[4].icon}
      </Button>
      <Button style={styles.button} onPress={() => onPress(icons[3].icon)}>
        {icons[3].icon}
      </Button>
      <Button style={styles.button} onPress={() => onPress(icons[2].icon)}>
        {icons[2].icon}
      </Button>
      <Button style={styles.button} onPress={() => onPress(icons[1].icon)}>
        {icons[1].icon}
      </Button>
      <Button style={styles.button} onPress={() => onPress(icons[0].icon)}>
        {icons[0].icon}
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
*/
