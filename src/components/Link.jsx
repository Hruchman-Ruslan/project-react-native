import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Link = ({ title, access }) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>{access}</Text>
      </TouchableOpacity>
    </View>
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
