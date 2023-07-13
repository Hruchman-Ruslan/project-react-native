import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Link = ({ title }) => {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignSelf: "center",
    gap: 4,
  },
  text: {
    fontFamily: "rb-regular",
    fontSize: 16,
    color: "#1B4371",
    fontWeight: "700",
  },
});
