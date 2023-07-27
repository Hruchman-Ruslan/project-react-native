import { SimpleLineIcons, Feather } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

const CreatePostsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.wrapperImage}>
          <Image
            style={styles.image}
            source={require("../assets/images/rectangle-image.jpg")}
          />
          <TouchableOpacity style={styles.wrapperIcon}>
            <SimpleLineIcons name="camera" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.text}>Upload a photo</Text>
        </View>

        <View style={styles.wrapperInput}>
          <TextInput style={styles.inputName} placeholder={"Name..."} />
          <Feather
            name="map-pin"
            size={24}
            color="#BDBDBD"
            style={styles.icon}
          />
          <TextInput style={styles.inputLocality} placeholder={"Locality..."} />
        </View>
        <TouchableOpacity style={styles.wrapperButton}>
          <Text style={styles.buttonText}>Publish</Text>
        </TouchableOpacity>
        <View style={styles.wrapperBoxDelete}>
          <TouchableOpacity style={styles.wrapperIconDelete}>
            <Feather name="trash-2" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default CreatePostsScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 32,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    borderRadius: 8,
  },
  wrapperImage: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  wrapperIcon: {
    position: "absolute",
    width: 60,
    height: 60,
    backgroundColor: "#FFFFFF",
    borderRadius: 30,

    justifyContent: "center",
    alignItems: "center",
  },
  wrapperText: {
    marginBottom: 32,
  },
  text: {
    color: "#BDBDBD",
    fontFamily: "rb-regular",
    fontSize: 16,
  },
  wrapperInput: {
    gap: 16,
    marginBottom: 32,
  },
  inputName: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",

    color: "#BDBDBD",
    fontFamily: "rb-regular",
    fontSize: 16,
  },
  inputLocality: {
    paddingVertical: 16,
    paddingLeft: 28,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",

    color: "#BDBDBD",
    fontFamily: "rb-regular",
    fontSize: 16,
  },
  icon: {
    position: "absolute",
    bottom: 16,
  },
  wrapperButton: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginBottom: 60,

    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "rb-regular",
    fontSize: 16,
    fontWeight: 700,
  },
  wrapperIconDelete: {
    width: 70,
    height: 40,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,

    justifyContent: "center",
    alignItems: "center",
  },
  wrapperBoxDelete: {
    justifyContent: "center",
    alignItems: "center",
  },
});
