import { Image, StyleSheet, View } from "react-native";
import Logo from "../assets/images/add-photo.png";

export const AddPhoto = () => {
  return (
    <View>
      <Image style={styles.wrapper} source={Logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 132,
    height: 120,
  },
});
