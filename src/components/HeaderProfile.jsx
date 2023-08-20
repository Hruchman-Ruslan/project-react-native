import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { EvilIcons, Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { authSignOutUser } from "../redux/auth/authOperations";
import { useState } from "react";

const initialState = {
  login: "",
  email: "",
  password: "",
};

const HeaderProfile = () => {
  const login = useSelector((state) => state.login);
  const avatar = useSelector((state) => state.avatar);
  const [state, setState] = useState(initialState);
  const navigation = useNavigation();

  const dispatch = useDispatch();

  return (
    <>
      <View style={styles.wrapperUser}>
        {avatar ? (
          <Image source={{ uri: avatar }} style={styles.imageUser} />
        ) : (
          <Image source={require("../assets/images/defautl.png")} />
        )}
        <TouchableOpacity style={styles.wrapperIcon}>
          <EvilIcons name="close" size={24} color="#BDBDBD" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.wrapperIconLogOut}
          onPress={() => {
            dispatch(authSignOutUser());
            setState(initialState);
            navigation.navigate("LoginScreen");
          }}
        >
          <Feather name="log-out" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>

      <View style={styles.wrapperTitle}>
        <Text style={styles.wrapperTitleText}>{login}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapperUser: {
    // position: "absolute",
    // top: -80,

    // marginTop: -100,
    marginBottom: 33,

    width: 132,
    height: 120,
    borderRadius: 16,

    alignSelf: "center",
  },
  imageUser: {
    width: "100%",
    flex: 1,
    borderRadius: 8,
  },

  wrapperIcon: {
    position: "absolute",
    width: 27,
    height: 27,
    top: 78,
    left: 117,
    backgroundColor: "#FFFFFF",
    borderRadius: 30,

    alignItems: "center",
    justifyContent: "center",
  },
  wrapperIconLogOut: {
    position: "absolute",
    width: 27,
    height: 27,
    top: 78,
    right: -95,
    borderRadius: 30,

    alignItems: "center",
    justifyContent: "center",
  },

  wrapperTitle: {
    marginBottom: 33,
  },
  wrapperTitleText: {
    textAlign: "center",
    fontFamily: "rb-medium",
    fontSize: 30,
    fontWeight: "500",
    letterSpacing: 0.3,
    color: "#212121",
  },
});

export default HeaderProfile;
