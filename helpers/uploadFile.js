import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Alert } from "react-native";
import { storage } from "../src/firebase/config";

export const uploadFile = async (uri, collection) => {
  try {
    if (!collection) throw new Error("Collection's name is not defined.");
    const response = await fetch(uri);
    const file = await response.blob();
    const fileID = Date.now().toString();
    const fileRef = ref(storage, `${collection}/${fileID}`);
    await uploadBytes(fileRef, file);
    return await getDownloadURL(fileRef);
  } catch (err) {
    Alert.alert("Error", `${err.message}`);
  }
};
