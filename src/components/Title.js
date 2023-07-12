import { StyleSheet, Text, View } from "react-native";

export const Title = ({ title }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    // marginBottom: 33,
    color: "#212121",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
    fontFamily: "rb-bold",
    fontSize: 30,
    letterSpacing: 0.3,

    marginTop: 32,
  },
});
