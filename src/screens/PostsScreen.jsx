import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import HeaderPosts from "../components/HeaderPosts";
import { database } from "../firebase/config";
import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";

// const DATA = [
//   {
//     id: "1",
//     cameraRef: require("../assets/images/rectangle-image.jpg"),
//     name: "Forest",
//     feedback: 8,
//     location: "Ivano-Frankivs'k Region, Ukraine",
//   },
//   {
//     id: "2",
//     cameraRef: require("../assets/images/rectangle-2.jpg"),
//     name: "Sunset on the Black Sea",
//     feedback: 3,
//     location: "Ukraine",
//   },
// ];

const renderItem = ({ item, navigation }) => (
  <>
    <View style={styles.wrapperImage}>
      <Image style={styles.image} source={{ uri: item.photo }} />
    </View>
    <View style={styles.wrapperImageName}>
      <Text style={styles.imageNameText}>{item.title}</Text>
    </View>
    <View style={styles.wrapperFeedback}>
      <TouchableOpacity
        style={styles.wrapperPosts}
        onPress={() => navigation.navigate("CommentsScreen")}
      >
        <Feather name="message-circle" size={24} color="#BDBDBD" />
        <Text style={styles.feedbackNumber}>0</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.wrapperLocation}
        onPress={() =>
          navigation.navigate("MapScreen", { location: item.geoLocation })
        }
      >
        <Feather
          name="map-pin"
          size={24}
          color="#BDBDBD"
          style={styles.feedbackLocationIcon}
        />
        <Text style={styles.feedbackLocationText}>{item.location}</Text>
      </TouchableOpacity>
    </View>
  </>
);

const PostsScreen = ({ navigation }) => {
  const [userPosts, setUserPosts] = useState([]);

  const getDataFromFirestore = async () => {
    try {
      const snapshot = await getDocs(collection(database, "users"));
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
      setUserPosts(data);
    }
    fetchData();
  }, []);

  return (
    <FlatList
      data={userPosts}
      renderItem={({ item }) => renderItem({ item, navigation })}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={<HeaderPosts />}
    />
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    backgroundColor: "white",
  },
  wrapperImage: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  image: {
    height: 240,
    width: "100%",
    borderRadius: 8,
  },
  imageNameText: {
    color: "#212121",
    fontFamily: "rb-medium",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
    marginBottom: 8,
  },
  wrapperFeedback: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 34,
  },
  wrapperPosts: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
  },
  feedbackNumber: {
    color: "#BDBDBD",
    fontFamily: "rb-regular",
    fontSize: 16,
    lineHeight: 24,
  },
  wrapperLocation: {
    display: "flex",
    flexDirection: "row",
    gap: 3,
  },
  feedbackLocationIcon: {
    textAlign: "right",
  },
  feedbackLocationText: {
    color: "#212121",
    textAlign: "right",
    fontFamily: "rb-regular",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 24,
    textDecorationLine: "underline",
  },
});

export default PostsScreen;
