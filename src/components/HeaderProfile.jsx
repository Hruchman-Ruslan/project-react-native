import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { EvilIcons, Feather } from "@expo/vector-icons";

const HeaderProfile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.wrapperUser}>
        <Image
          source={require("../assets/images/rectangle.png")}
          style={styles.imageUser}
        />
        <TouchableOpacity style={styles.wrapperIcon}>
          <EvilIcons name="close" size={24} color="#BDBDBD" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.wrapperIconLogOut}
          onPress={() => {
            navigation.navigate("LoginScreen");
          }}
        >
          <Feather name="log-out" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>

      <View style={styles.wrapperTitle}>
        <Text style={styles.wrapperTitleText}>Natali Romanova</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapperUser: {
    // position: "absolute",
    // top: -80,

    marginBottom: 33,

    width: 132,
    height: 120,
    borderRadius: 16,
    alignSelf: "center",
    flex: 1,
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
