import { AntDesign } from "@expo/vector-icons";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { database } from "../firebase/config";

const CommentInput = () => {
  const [addMessage, setAddMessage] = useState("");

  const postMessage = async () => {
    try {
      const createdAt = new Date().toLocaleString();
      const docRef = await addDoc(collection(database, "chat"), {
        addMessage,
        createdAt,
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
      throw e;
    }
  };

  const handleSubmit = async () => {
    await postMessage();
    Alert.alert(`${addMessage}`);
    setAddMessage("");
  };

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        placeholder={"Comment..."}
        value={addMessage}
        onChangeText={setAddMessage}
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
