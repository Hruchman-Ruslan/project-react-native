import { useFonts } from "expo-font";
import "react-native-gesture-handler";
import MainNavigator from "./src/navigation/MainNavigator";

export default function App() {
  const [fontsLoaded] = useFonts({
    "rb-bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
    "rb-medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
    "rb-regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return <MainNavigator />;
}
