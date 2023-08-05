import React from "react";

import { StyleSheet, View, Image } from "react-native";

const HeaderComments = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperImage}>
        <Image
          style={styles.image}
          source={require("../assets/images/rectangle-2.jpg")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    overflow: "hidden",
  },
  wrapperImage: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HeaderComments;
