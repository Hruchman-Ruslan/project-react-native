import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import { useState } from "react";
import CommentInput from "../components/CommentInput";
import HeaderComments from "../components/HeaderComments";
import { database } from "../firebase/config";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const renderItem = ({ item, avatar, userID }) => {
  return (
    <View
      style={
        userID === item.authorCommentId
          ? { ...styles.wrapper, flexDirection: "row-reverse" }
          : { ...styles.wrapper, flexDirection: "row" }
      }
    >
      <View style={styles.wrapperAvatar}>
        {avatar ? (
          <Image source={{ uri: item.avatar }} style={styles.avatarImage} />
        ) : (
          <Image
            source={require("../assets/images/defautl.png")}
            style={styles.defaultImage}
          />
        )}
      </View>
      <View style={styles.wrapperText}>
        <Text style={styles.text}>{item.addMessage}</Text>
        <Text
          style={
            userID === item.authorCommentId
              ? { ...styles.text, textAlign: "left" }
              : { ...styles.text, textAlign: "right" }
          }
        >
          {item.createdAt}
        </Text>
      </View>
    </View>
  );
};

const CommentsScreen = ({ route }) => {
  const { postId, uri, uid, autorPostId } = route.params;
  console.log("uid", uid);
  console.log("autorPostId", autorPostId);
  const avatar = useSelector((state) => state.avatar);
  console.log("test", postId);
  console.log("avatar", avatar);

  const [addMessage, setAddMessage] = useState("");
  const userID = useSelector((state) => state.userID);

  console.log("id", postId);

  const [getMessage, setGetMessage] = useState([]);

  useEffect(() => {
    (async () => {
      const queryObj = query(collection(database, "users", postId, "comments"));
      const commentRef = doc(database, "users", postId);
      const unsubscribe = onSnapshot(queryObj, (querySnapshot) => {
        const commentsList = [];
        querySnapshot.forEach((doc) =>
          commentsList.push({ ...doc.data(), id: doc.id })
        );
        updateDoc(commentRef, { commentCounter: commentsList.length });
        setGetMessage(commentsList);
      });

      return () => {
        unsubscribe();
      };
    })();
  }, []);

  const postMessage = async () => {
    try {
      const createdAt = new Date().toLocaleString();

      const docRef = await addDoc(
        collection(database, "users", postId, "comments"),
        {
          addMessage,
          createdAt,
          userID,
          authorCommentId: userID,
          avatar,
        }
      );

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
      throw e;
    }
  };

  const handleSubmit = async () => {
    await postMessage();
    setAddMessage("");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={getMessage}
        renderItem={({ item }) => renderItem({ item, avatar, userID })}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        ListHeaderComponent={<HeaderComments image={uri} />}
      />
      <View style={styles.wrapperInput}>
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
    </View>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  defaultImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  wrapper: {
    gap: 16,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 32,
    marginBottom: 24,
  },
  wrapperAvatar: {},
  avatar: {
    width: 24,
    height: 24,
  },
  wrapperText: {
    flex: 1,
    padding: 16,

    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderRadius: 6,
    borderTopRightRadius: 0,
  },
  text: {
    color: "#212121",
    fontFamily: "rb-regular",
    fontSize: 13,
    lineHeight: 18,

    marginBottom: 8,

    alignItems: "baseline",
    justifyContent: "center",
  },
  date: {
    color: "#BDBDBD",
    fontFamily: "rb-regular",
    fontSize: 10,
    lineHeight: 14,
  },
  wrapperInput: {
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
