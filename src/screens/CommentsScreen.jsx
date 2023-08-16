import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import { useState } from "react";
import CommentInput from "../components/CommentInput";
import HeaderComments from "../components/HeaderComments";
import { database } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const renderItem = ({ item, avatar }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapperAvatar}>
        {avatar ? (
          <Image source={{ uri: avatar }} style={styles.avatarImage} />
        ) : (
          <Image source={require("../assets/images/defautl.png")} />
        )}
      </View>
      <View style={styles.wrapperText}>
        <Text style={styles.text}>{item.addMessage}</Text>
        <Text style={styles.date}>{item.createdAt}</Text>
      </View>
    </View>
  );
};

const CommentsScreen = ({ route }) => {
  const { postId, uri } = route.params;
  const avatar = useSelector((state) => state.avatar);
  console.log("test", postId);

  const [getMessage, setGetMessage] = useState([]);

  const getDataFromFirestore = async () => {
    try {
      const snapshot = await getDocs(
        collection(database, "users", postId, "comments")
      );
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("data", data);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  useEffect(() => {
    async function fetchData() {
      const data = await getDataFromFirestore();
      setGetMessage(data);
    }
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={getMessage}
        renderItem={({ item }) => renderItem({ item, avatar })}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        ListHeaderComponent={<HeaderComments image={uri} />}
        ListFooterComponent={<CommentInput postId={postId} />}
        ListFooterComponentStyle={styles.footer}
      />
    </View>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    flex: 1,
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
  footer: {
    marginTop: "auto",
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
    textAlign: "right",
    // textAlign: "left",
    fontFamily: "rb-regular",
    fontSize: 10,
    lineHeight: 14,
  },
});
