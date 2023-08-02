import { AntDesign } from "@expo/vector-icons";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";

const CommentInput = ({ defaultText, text, setText, handleSubmit }) => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        placeholder={defaultText}
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity style={styles.wrapperButton} onPress={handleSubmit}>
        <AntDesign name="arrowup" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",

    justifyContent: "center",
    alignSelf: "center",
  },
  input: {
    borderRadius: 8,
    padding: 16,
    color: "#212121",
    fontFamily: "rb-regular",
    fontSize: 16,
    lineHeight: 16,
    backgroundColor: "#F6F6F6",
    fontWeight: "700",
    borderRadius: 100,
  },
  wrapperButton: {
    width: 34,
    height: 34,
    borderRadius: 30,
    backgroundColor: "#FF6C00",
    position: "absolute",
    top: 12,
    right: 10,

    justifyContent: "center",
    alignItems: "center",
  },
});

export default CommentInput;
