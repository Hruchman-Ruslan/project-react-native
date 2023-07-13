import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Title } from "../components/Title";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { StatusBar } from "expo-status-bar";
import { Link } from "../components/Link";
import { Background } from "../components/Background";
import { KeyboardWrapper } from "../components/KeyboardWrapper";
import { ShowPassword } from "../components/ShowPassword";

export const LoginScreen = () => {
  return (
    <Background>
      <KeyboardWrapper screenType="Login">
        <SafeAreaView style={styles.wrapper}>
          <Title title={"Sign in"} />

          <View style={{ width: "100%", marginBottom: 27, gap: 16 }}>
            <Input defaultText={"Email"} />
            <Input defaultText={"Password"} access={true} />
            <ShowPassword />
          </View>

          <Button title={"Sign in"} />
          <Link title={"Don't have an account? Register"} />
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
    paddingTop: 32,
    paddingHorizontal: 16,
    paddingBottom: 144,
    alignItems: "center",
  },
});
