import React from "react";

import { StyleSheet, View, Image } from "react-native";

const HeaderComments = ({ image }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperImage}>
        <Image style={styles.image} source={{ uri: image }} />
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
  image: {
    height: 240,
    width: "100%",
    borderRadius: 8,
  },
});

export default HeaderComments;
