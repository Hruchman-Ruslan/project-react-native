import { useFonts } from "expo-font";
import "react-native-gesture-handler";
import MainNavigator from "./src/navigation/MainNavigator";
import { Provider } from "react-redux";
import { persistor, store } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Text } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    "rb-bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
    "rb-medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
    "rb-regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Text>Loading...</Text>}>
        <MainNavigator />
      </PersistGate>
    </Provider>
  );
}
