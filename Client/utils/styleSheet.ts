import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F3EEF6",
  },
  textRegular: {
    fontSize: 20,
    color: "#404040",
  },

  buttonStandard: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#B18DC1",
    widht: "50%",
  },
  title: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    padding: 5,
    color: "#404040",
  },
  citat: {
    fontSize: 15,
    textAlign: "center",
    padding: 15,
    color: "#404040",
  },
  image: {
    width: "100%",
    height: 300,
    marginBottom: 40,
  },

  appbarHeader: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#404040",
    backgroundColor: "#B69EC3",
  },
  appbarBottom: {
    backgroundColor: "#B69EC3",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-between",
  },
});
