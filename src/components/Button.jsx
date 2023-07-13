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
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    marginBottom: 16,
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "rb-regular",
    fontSize: 16,
    fontWeight: "700",
  },
});
