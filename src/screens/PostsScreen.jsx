import { View, Text, StyleSheet, Image } from "react-native";

const PostsScreen = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.box}>
        <View style={styles.box}>
          <Image source={require("../assets/images/rectangle.jpg")} />
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.loginText}>Natali Romanova</Text>
          <Text style={styles.emailText}>email@example.com</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  wrapperImage: {},
  wrapperText: {},
  loginText: {
    color: "#212121",
    fontFamily: "rb-bold",
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 20,
  },
  emailText: {
    color: "#212121",
    fontFamily: "rb-regular",
    fontSize: 11,
    lineHeight: 16,
  },
});

export default PostsScreen;
