import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";

import { SimpleLineIcons, Feather } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";

const CreatePostsScreen = () => {
  const [type, _] = useState(CameraType.back);
  const [cameraRef, setCameraRef] = useState(null);
  const [name, setName] = useState("");
  const [locality, setLocality] = useState("");
  const [location, setLocation] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      } else {
        let location = await Location.getCurrentPositionAsync({});
        const coords = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        };
        setLocation(coords);
      }
    })();
  }, []);

  const handleClickButton = async () => {
    const { latitude, longitude } = location;

    Alert.alert(
      "Credentials",
      `${cameraRef} + ${name} + ${locality} + Location: ${latitude}, ${longitude}`
    );

    setCameraRef(null);
    setName("");
    setLocality("");
    setLocation(null);
    navigation.navigate("Posts Screen");

    console.log(
      `${cameraRef} + ${name} + ${locality} + Location: ${latitude}, ${longitude}`
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Camera style={styles.camera} type={type} ref={setCameraRef}>
          <TouchableOpacity
            style={styles.wrapperIcon}
            onPress={async () => {
              if (cameraRef) {
                const { uri } = await cameraRef.takePictureAsync();
                await MediaLibrary.createAssetAsync(uri);
                console.log(uri);
              }
            }}
          >
            <SimpleLineIcons name="camera" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </Camera>

        <View style={styles.wrapperText}>
          <Text style={styles.text}>Upload a photo</Text>
        </View>

        <View style={styles.wrapperInput}>
          <TextInput
            style={styles.inputName}
            placeholder={"Name..."}
            value={name}
            onChangeText={setName}
          />
          <Feather
            name="map-pin"
            size={24}
            color="#BDBDBD"
            style={styles.icon}
          />
          <TextInput
            style={styles.inputLocality}
            placeholder={"Locality..."}
            value={locality}
            onChangeText={setLocality}
          />
        </View>
        <TouchableOpacity
          style={styles.wrapperButton}
          onPress={handleClickButton}
        >
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
  camera: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 90,
  },
  wrapperIcon: {
    width: 60,
    height: 60,
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    opacity: 0.3,

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

export default CreatePostsScreen;
