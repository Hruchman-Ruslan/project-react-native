import { StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const AddPhoto = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <AntDesign name="pluscircleo" size={25} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: -60,

    width: 132,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  icon: {
    position: "relative",
    top: 78,
    left: 117,
    color: "#FF6C00",
  },
});
