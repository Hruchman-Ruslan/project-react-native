import { Feather } from "@expo/vector-icons";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const PostsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.wrapperUser}>
          <View style={styles.wrapperAvatar}>
            <Image source={require("../assets/images/rectangle.jpg")} />
          </View>
          <View style={styles.wrapperText}>
            <Text style={styles.loginText}>Natali Romanova</Text>
            <Text style={styles.emailText}>email@example.com</Text>
          </View>
        </View>
        <View style={styles.wrapperImage}>
          <Image
            style={styles.image}
            source={require("../assets/images/rectangle-image.jpg")}
          />
        </View>
        <View style={styles.wrapperImageName}>
          <Text style={styles.imageNameText}>Forest</Text>
        </View>
        <View style={styles.wrapperFeedback}>
          <View style={styles.wrapperPosts}>
            <Feather name="message-circle" size={24} color="#BDBDBD" />
            <Text style={styles.feedbackNumber}>0</Text>
          </View>
          <View style={styles.wrapperLocation}>
            <Feather
              name="map-pin"
              size={24}
              color="#BDBDBD"
              style={styles.feedbackLocationIcon}
            />
            <Text style={styles.feedbackLocationText}>
              Ivano-Frankivs'k Region, Ukraine
            </Text>
          </View>
        </View>
        <View style={styles.wrapperImage}>
          <Image
            style={styles.image}
            source={require("../assets/images/rectangle-2.jpg")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: "white",
  },
  wrapperUser: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 32,
  },
  wrapperAvatar: {
    borderRadius: 8,
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
  wrapperText: {},
  loginText: {
    color: "#212121",
    fontFamily: "rb-bold",
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 20,
  },
  emailText: {
    color: "#212121",
    fontFamily: "rb-regular",
    fontSize: 11,
    lineHeight: 16,
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
