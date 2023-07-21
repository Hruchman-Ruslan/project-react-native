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

export default function LoginScreen() {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleTogglePassword = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleClickButton = () => {
    Alert.alert("Credentials", ` ${email} + ${password}`);
    setEmail("");
    setPassword("");
    navigation.navigate("BottomNavigator");
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
