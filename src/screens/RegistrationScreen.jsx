import React, { useState } from "react";
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

export const RegistrationScreen = () => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleTogglePassword = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleClickButton = () => {
    Alert.alert("Credentials", `${login} + ${email} + ${password}`);
  };

  return (
    <Background>
      <KeyboardWrapper screenType="Registration">
        <SafeAreaView style={styles.wrapper}>
          <AddPhoto />
          <Title title={"Registration"} />

          <View style={{ width: "100%", marginBottom: 27, gap: 16 }}>
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
          <Link title={"Already have an account? Sign In"} />
        </SafeAreaView>
      </KeyboardWrapper>
      <StatusBar style="auto" />
    </Background>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFF",
    paddingTop: 60,
    paddingHorizontal: 16,
    paddingBottom: 50,
    alignItems: "center",
  },
});
