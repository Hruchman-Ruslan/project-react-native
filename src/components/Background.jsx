import {
  ImageBackground,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

export const Background = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        source={require("../assets/images/bg.png")}
        resizeMode="cover"
        style={styles.image}
      >
        {children}
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "flex-end",
    // alignItems: "center",
  },
});
