import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const Button = ({ title }) => {
  const handleClick = () => console.log("Hello");

  return (
    <TouchableOpacity style={styles.button} onPress={handleClick}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginBottom: 16,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  buttonText: {
    fontFamily: "rb-regular",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    color: "#FFF",
  },
});
