import React, { useEffect } from "react";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import HeaderProfile from "../components/HeaderProfile";
import { database } from "../firebase/config";
import { useState } from "react";
import { useSelector } from "react-redux";

const renderItem = ({ item, navigation, updateLikes }) => {
  return (
    <>
      <View style={styles.wrapperImage}>
        <Image style={styles.image} source={{ uri: item.photo }} />
      </View>
      <View style={styles.wrapperImageName}>
        <Text style={styles.imageNameText}>{item.title}</Text>
      </View>
      <View style={styles.wrapperFeedback}>
        <View style={styles.box}>
          <TouchableOpacity
            style={styles.wrapperPosts}
            onPress={() =>
              navigation.navigate("CommentsScreen", {
                postId: item.id,
                uri: item.photo,
              })
            }
          >
            <Feather
              name="message-circle"
              size={24}
              color={item.commentCounter > 0 ? "#FF6C00" : "#BDBDBD"}
              style={{
                transform:
                  item.commentCounter > 0 ? [{ rotate: "280deg" }] : [],
              }}
            />
            <Text style={styles.feedbackNumber}>{item.commentCounter}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.wrapperPosts}
            onPress={() => {
              updateLikes(item.likes + 1, item.id);
            }}
          >
            <Feather
              name="thumbs-up"
              size={24}
              color={item.likes > 0 ? "#FF6C00" : "#BDBDBD"}
            />
            <Text style={styles.feedbackNumber}>{item.likes}</Text>
          </TouchableOpacity>
        </View>

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
};

const ProfileScreen = ({ navigation }) => {
  const [userPosts, setUserPosts] = useState([]);

  console.log("post", userPosts);
  const userID = useSelector((state) => state.userID);
  console.log("userID", userID);

  useEffect(() => {
    const queryObj = query(
      collection(database, "users"),
      where("userID", "==", userID)
    );
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

  const updateLikes = async (likes, id) => {
    try {
      const likeRef = doc(database, "users", id);
      await updateDoc(likeRef, {
        likes: likes,
      });
    } catch (error) {
      console.log("err", error.message);
    }
  };

  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      resizeMode="cover"
      style={styles.background}
    >
      <FlatList
        data={userPosts}
        renderItem={({ item }) => renderItem({ item, navigation, updateLikes })}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<HeaderProfile />}
      />
    </ImageBackground>
  );
};

// const ProfileScreen = ({ navigation }) => {
//   return (
//     <ImageBackground
//       source={require("../assets/images/bg.png")}
//       resizeMode="cover"
//       style={styles.background}
//     >
//       <ScrollView
//         contentContainerStyle={styles.scrollContainer}
//         showsVerticalScrollIndicator={false}
//       >
//         <HeaderProfile />
//         {DATA.map((item) => (
//           <View key={item.id}>
//             <View style={styles.wrapperImage}>
//               <Image style={styles.image} source={item.cameraRef} />
//             </View>
//             <View style={styles.wrapperImageName}>
//               <Text style={styles.imageNameText}>{item.name}</Text>
//             </View>
//             <View style={styles.wrapperFeedback}>
//               <View style={styles.box}>
//                 <TouchableOpacity
//                   style={styles.wrapperPosts}
//                   onPress={() => navigation.navigate("CommentsScreen")}
//                 >
//                   <Feather name="message-circle" size={24} color="#FF6C00" />
//                   <Text style={styles.feedbackNumber}>{item.messageCount}</Text>
//                 </TouchableOpacity>
//                 <View style={styles.wrapperPosts}>
//                   <Feather name="thumbs-up" size={24} color="#FF6C00" />
//                   <Text style={styles.feedbackNumber}>{item.likesCount}</Text>
//                 </View>
//               </View>

//               <TouchableOpacity
//                 style={styles.wrapperLocation}
//                 onPress={() => navigation.navigate("MapScreen")}
//               >
//                 <Feather
//                   name="map-pin"
//                   size={24}
//                   color="#BDBDBD"
//                   style={styles.feedbackLocationIcon}
//                 />
//                 <Text style={styles.feedbackLocationText}>{item.location}</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         ))}
//       </ScrollView>
//     </ImageBackground>
//   );
// };

const styles = StyleSheet.create({
  scrollContainer: {
    // flexGrow: 1,

    paddingHorizontal: 16,
    paddingTop: 32,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    marginTop: 110,
    paddingBottom: 100,
  },
  background: {
    // flex: 1,
    justifyContent: "center",
  },
  wrapperImage: {
    // flex: 1,
    // width: "100%",
    // height: "100%",

    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  image: {
    height: 240,
    width: "100%",

    borderRadius: 8,
  },
  wrapperImageName: {
    marginBottom: 8,
  },
  imageNameText: {
    color: "#212121",
    fontFamily: "rb-medium",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
  },
  wrapperFeedback: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 34,
  },
  box: {
    flexDirection: "row",
    gap: 24,
  },
  wrapperPosts: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
  },
  feedbackNumber: {
    color: "#212121",
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

export default ProfileScreen;
