import React from "react";
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

const DATA = [
  {
    id: "1",
    cameraRef: require("../assets/images/rectangle-image.jpg"),
    name: "Forest",
    messageCount: 8,
    likesCount: 153,
    location: "Ukraine",
  },
  {
    id: "2",
    cameraRef: require("../assets/images/rectangle-2.jpg"),
    name: "Sunset on the Black Sea",
    messageCount: 3,
    likesCount: 200,
    location: "Ukraine",
  },
  {
    id: "3",
    cameraRef: require("../assets/images/rectangle-3.jpg"),
    name: "An old house in Venice",
    messageCount: 50,
    likesCount: 200,
    location: "Italy",
  },
];

const renderItem = ({ item, navigation }) => {
  return (
    <>
      <View style={styles.wrapperImage}>
        <Image style={styles.image} source={item.cameraRef} />
      </View>
      <View style={styles.wrapperImageName}>
        <Text style={styles.imageNameText}>{item.name}</Text>
      </View>
      <View style={styles.wrapperFeedback}>
        <View style={styles.box}>
          <TouchableOpacity
            style={styles.wrapperPosts}
            onPress={() => navigation.navigate("CommentsScreen")}
          >
            <Feather name="message-circle" size={24} color="#FF6C00" />
            <Text style={styles.feedbackNumber}>{item.messageCount}</Text>
          </TouchableOpacity>
          <View style={styles.wrapperPosts}>
            <Feather name="thumbs-up" size={24} color="#FF6C00" />
            <Text style={styles.feedbackNumber}>{item.likesCount}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.wrapperLocation}
          onPress={() => navigation.navigate("MapScreen")}
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
  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => renderItem({ item, navigation })}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<HeaderProfile />}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  container: {
    paddingHorizontal: 16,
    paddingTop: 32,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    marginTop: 110,
  },
  wrapperImage: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  image: {
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

export default ProfileScreen;
