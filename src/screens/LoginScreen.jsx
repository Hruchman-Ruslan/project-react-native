import { Alert, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Title } from "../components/Title";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { StatusBar } from "expo-status-bar";
import { Link } from "../components/Link";
import { Background } from "../components/Background";
import { KeyboardWrapper } from "../components/KeyboardWrapper";
import { ShowPassword } from "../components/ShowPassword";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authLogInUser } from "../redux/auth/authOperations";

const initialState = {
  email: "",
  password: "",
};

export default function LoginScreen() {
  const [state, setState] = useState(initialState);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const handleTogglePassword = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleClickButton = async () => {
    if (!state.email || !state.password) {
      Alert.alert("Fill in all fields please!");
      return;
    }

    try {
      const resultAction = await dispatch(authLogInUser(state));

      if (authLogInUser.rejected.match(resultAction)) {
        Alert.alert("User not found. Please check your credentials.");
        return;
      }

      navigation.navigate("BottomNavigator");
    } catch (error) {
      Alert.alert("An error occurred. Please try again later.");
    }
  };

  const handleClickOnText = () => {
    navigation.navigate("RegistrationScreen");
  };

  return (
    <Background>
      <KeyboardWrapper>
        <SafeAreaView style={styles.wrapper}>
          <Title title={"Sign in"} />

          <View style={styles.inputWrapper}>
            <Input
              placeholder={"Email"}
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, email: value }))
              }
            />
            <Input
              placeholder={"Password"}
              secureTextEntry={!isPasswordVisible}
              autoCapitalize="none"
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, password: value }))
              }
            />
            <ShowPassword
              isPasswordVisible={isPasswordVisible}
              onTogglePassword={handleTogglePassword}
            />
          </View>

          <Button title={"Sign in"} handleClick={handleClickButton} />
          <Link
            title={"Don't have an account? Register"}
            handleClickOnText={handleClickOnText}
          />
        </SafeAreaView>
      </KeyboardWrapper>
      <StatusBar style="auto" />
    </Background>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFF",
    paddingTop: 90,
    paddingHorizontal: 16,
    paddingBottom: 50,
    alignItems: "center",
  },
  inputWrapper: {
    width: "100%",
    marginBottom: 27,
    gap: 16,
  },
});
