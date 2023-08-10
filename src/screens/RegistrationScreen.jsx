import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Title } from "../components/Title";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { StatusBar } from "expo-status-bar";
import { Link } from "../components/Link";
import { AddPhoto } from "../components/AddPhoto";
import { KeyboardWrapper } from "../components/KeyboardWrapper";
import { Background } from "../components/Background";
import { ShowPassword } from "../components/ShowPassword";
import { useDispatch } from "react-redux";
import { authSignUpUser } from "../redux/auth/authOperations";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen() {
  const [state, setState] = useState(initialState);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const handleTogglePassword = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleClickButton = () => {
    dispatch(authSignUpUser(state));
    setState(initialState);
    // navigation.navigate("BottomNavigator");
  };

  const handleClickOnText = () => {
    navigation.navigate("LoginScreen");
  };

  return (
    <Background>
      <KeyboardWrapper>
        <SafeAreaView style={styles.wrapper}>
          <AddPhoto />
          <Title title={"Registration"} />

          <View style={styles.inputWrapper}>
            <Input
              placeholder={"Login"}
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, login: value }))
              }
            />
            <Input
              placeholder={"Email"}
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, email: value }))
              }
            />
            <Input
              placeholder={"Password"}
              secureTextEntry={!isPasswordVisible}
              onChangeText={(value) =>
                setState((prevState) => ({
                  ...prevState,
                  password: value,
                }))
              }
            />
            <ShowPassword
              isPasswordVisible={isPasswordVisible}
              onTogglePassword={handleTogglePassword}
            />
          </View>

          <Button title={"Register"} handleClick={handleClickButton} />
          <Link
            title={"Already have an account? Sign In"}
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
