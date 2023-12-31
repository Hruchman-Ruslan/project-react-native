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
import { collection, getDocs, onSnapshot, query } from "firebase/firestore";
import { useSelector } from "react-redux";
import { ActivityIndicator } from "react-native";

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
        onPress={() =>
          navigation.navigate("CommentsScreen", {
            postId: item.id,
            uri: item.photo,
            authorPostId: item.userID,
          })
        }
      >
        <Feather
          name="message-circle"
          size={24}
          color={item.commentCounter > 0 ? "#FF6C00" : "#BDBDBD"}
          style={{
            transform: item.commentCounter > 0 ? [{ rotate: "280deg" }] : [],
          }}
        />
        <Text style={styles.feedbackNumber}>{item.commentCounter}</Text>
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
  // console.log(userPosts);
  const [loading, setLoading] = useState(true);

  const userID = useSelector((state) => state.userID);
  const login = useSelector((state) => state.login);
  const avatar = useSelector((state) => state.avatar);
  const email = useSelector((state) => state.email);

  useEffect(() => {
    const queryObj = query(collection(database, "users"));
    const unsubscribe = onSnapshot(queryObj, (querySnapshot) => {
      const postsList = [];
      querySnapshot.forEach((doc) =>
        postsList.push({ ...doc.data(), id: doc.id })
      );
      setUserPosts(postsList);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // if (loading) {
  //   return (
  //     <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
  //       <ActivityIndicator size="large" color="#FF6C00" />
  //     </View>
  //   );
  // }

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
