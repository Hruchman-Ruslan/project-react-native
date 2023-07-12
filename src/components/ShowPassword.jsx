import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const ShowPassword = () => {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <Text style={styles.text}>Show</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 30,
    right: 16,
  },
  text: {
    color: "#1B4371",
    textAlign: "right",
    fontFamily: "rb-regular",
    fontSize: 16,
    fontWeight: "700",
  },
});
