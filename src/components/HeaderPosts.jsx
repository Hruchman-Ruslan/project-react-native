import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const HeaderPosts = () => {
  return (
    <View style={styles.wrapperUser}>
      <View style={styles.wrapperAvatar}>
        <Image source={require("../assets/images/rectangle.jpg")} />
      </View>
      <View style={styles.wrapperText}>
        <Text style={styles.loginText}>Natali Romanova</Text>
        <Text style={styles.emailText}>email@example.com</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperUser: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 32,
  },
  wrapperAvatar: {
    borderRadius: 8,
  },
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

export default HeaderPosts;
