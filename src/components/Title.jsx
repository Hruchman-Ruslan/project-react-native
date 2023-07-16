import { StyleSheet, Text, View } from "react-native";

export const Title = ({ title }) => {
  return (
    <View style={styles.wrapperTitle}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperTitle: {
    marginBottom: 33,
  },
  title: {
    color: "#212121",
    textAlign: "center",
    textShadowColor: "#0000003f",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
    fontFamily: "rb-bold",
    fontSize: 30,
    letterSpacing: 0.3,
  },
});
