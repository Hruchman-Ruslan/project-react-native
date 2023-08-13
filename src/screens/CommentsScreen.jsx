import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import { useState } from "react";
import CommentInput from "../components/CommentInput";
import { Alert } from "react-native";
import HeaderComments from "../components/HeaderComments";
import { database } from "../firebase/config";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";

// const DATA = [
//   {
//     id: "1",
//     avatar: require("../assets/images/rectangle.png"),
//     message:
//       "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
//     datetime: new Date("2023-08-02T08:30:00"),
//   },
//   {
//     id: "2",
//     avatar: require("../assets/images/rectangle.png"),
//     message:
//       "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
//     datetime: new Date("2023-08-02T09:15:00"),
//   },
// ];

const renderItem = ({ item }) => (
  <>
    <View style={styles.wrapper}>
      <View style={styles.wrapperAvatar}>
        <Image
          style={styles.avatar}
          source={require("../assets/images/rectangle.png")}
        />
      </View>
      <View style={styles.wrapperText}>
        <Text style={styles.text}>{item.addMessage}</Text>
        <Text style={styles.date}>{item.createdAt}</Text>
      </View>
    </View>
  </>
);

const CommentsScreen = () => {
  const [getMessage, setGetMessage] = useState([]);
  console.log(getMessage);

  const getDataFromFirestore = async () => {
    try {
      const snapshot = await getDocs(collection(database, "chat"));
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
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
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        ListHeaderComponent={<HeaderComments />}
        ListFooterComponent={<CommentInput />}
        ListFooterComponentStyle={styles.footer}
      />
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
