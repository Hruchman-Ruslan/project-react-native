import { StyleSheet, TextInput, View } from "react-native";

export const Input = ({ defaultText }) => {
  return <TextInput style={styles.input} placeholder={defaultText} />;
};

const styles = StyleSheet.create({
  input: {
    width: 343,
    height: 50,
    flexShrink: 0,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    paddingLeft: 16,
    paddingHorizontal: 16,

    color: "#212121",
    fontFamily: "rb-regular",
    fontSize: 16,
    lineHeight: 16,
  },
});
