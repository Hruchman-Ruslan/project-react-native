import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const Button = ({ title }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: "flex",
    width: 343,
    paddingVertical: 16,
    paddingHorizontal: 32,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    marginTop: 43,
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "rb-regular",
    fontSize: 16,
  },
});
