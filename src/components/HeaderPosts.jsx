import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useSelector } from "react-redux";

const HeaderPosts = () => {
  const login = useSelector((state) => state.login);
  const email = useSelector((state) => state.email);
  const avatar = useSelector((state) => state.avatar);
  // console.log(login);
  // console.log(email);

  return (
    <View style={styles.wrapperUser}>
      <View style={styles.wrapperAvatar}>
        {avatar ? (
          <Image source={{ uri: avatar }} style={styles.avatarImage} />
        ) : (
          <Image source={require("../assets/images/defautl.png")} />
        )}
      </View>
      <View style={styles.wrapperText}>
        <Text style={styles.loginText}>{login}</Text>
        <Text style={styles.emailText}>{email}</Text>
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
  avatarImage: {
    width: 40,
    height: 40,
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
