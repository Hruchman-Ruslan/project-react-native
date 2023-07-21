import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Alert } from "react-native";
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

export default function RegistrationScreen() {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleTogglePassword = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleClickButton = () => {
    Alert.alert("Credentials", `${login} + ${email} + ${password}`);
    setLogin("");
    setEmail("");
    setPassword("");
    // navigation.navigate("PostsScreen");
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
            <Input defaultText={"Login"} text={login} setText={setLogin} />
            <Input defaultText={"Email"} text={email} setText={setEmail} />
            <Input
              defaultText={"Password"}
              access={!isPasswordVisible}
              text={password}
              setText={setPassword}
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
