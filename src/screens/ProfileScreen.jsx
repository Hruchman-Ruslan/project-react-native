import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { EvilIcons, Feather } from "@expo/vector-icons";

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.wrapperUser}>
            <Image
              source={require("../assets/images/rectangle.png")}
              style={styles.imageUser}
            />
            <TouchableOpacity style={styles.wrapperIcon}>
              <EvilIcons
                name="close"
                size={24}
                color="#BDBDBD"
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.wrapperIconLogOut}>
              <Feather
                name="log-out"
                size={24}
                color="#BDBDBD"
                style={styles.iconLogOut}
                onPress={() => {
                  navigation.navigate("LoginScreen");
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.wrapperTitle}>
            <Text style={styles.wrapperTitleText}>Natali Romanova</Text>
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
            <View style={styles.box}>
              <View style={styles.wrapperPosts}>
                <Feather
                  name="message-circle"
                  size={24}
                  color="#FF6C00"
                  style={styles.feedbackIcon}
                />
                <Text style={styles.feedbackNumber}>0</Text>
              </View>
              <View style={styles.wrapperPosts}>
                <Feather name="thumbs-up" size={24} color="#FF6C00" />
                <Text style={styles.feedbackNumber}>0</Text>
              </View>
            </View>

            <View style={styles.wrapperLocation}>
              <Feather
                name="map-pin"
                size={24}
                color="#BDBDBD"
                style={styles.feedbackLocationIcon}
              />
              <Text style={styles.feedbackLocationText}>Ukraine</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
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
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    marginTop: 110,
  },
  wrapperUser: {
    position: "absolute",
    top: -60,

    width: 132,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,

    alignSelf: "center",
  },
  imageUser: {
    width: "100%",
    flex: 1,
    borderRadius: 8,
  },
  wrapperIcon: {
    position: "absolute",
    width: 27,
    height: 27,
    top: 78,
    left: 117,
    backgroundColor: "#FFFFFF",
    borderRadius: 30,

    alignItems: "center",
    justifyContent: "center",
  },
  wrapperIconLogOut: {
    position: "absolute",
    width: 27,
    height: 27,
    top: 78,
    right: -105,
    borderRadius: 30,

    alignItems: "center",
    justifyContent: "center",
  },
  feedbackIcon: {
    transform: [{ rotate: "280deg" }],
  },
  icon: {},
  wrapperTitle: {
    paddingTop: 60,
    marginBottom: 33,
  },
  wrapperTitleText: {
    textAlign: "center",
    fontFamily: "rb-medium",
    fontSize: 30,
    fontWeight: "500",
    letterSpacing: 0.3,
    color: "#212121",
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
