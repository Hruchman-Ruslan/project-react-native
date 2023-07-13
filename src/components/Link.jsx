import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Link = ({ title }) => {
  return (
    <TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "rb-regular",
    fontSize: 16,
    color: "#1B4371",
    fontWeight: "700",
    textAlign: "center",
  },
});
