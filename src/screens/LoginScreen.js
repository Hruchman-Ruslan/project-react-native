import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Title } from "../components/Title";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { StatusBar } from "expo-status-bar";
import { Link } from "../components/Link";
import { Background } from "../components/Background";
import { KeyboardWrapper } from "../components/Keyboard";
import { ShowPassword } from "../components/ShowPassword";

export const LoginScreen = () => {
  return (
    <Background>
      <KeyboardWrapper>
        <SafeAreaView style={styles.wrapper}>
          <View style={styles.wrapperTitle}>
            <Title title={"Sign in"} />
          </View>

          <View style={styles.wrapperInput}>
            <Input defaultText={"Email"} />
            <Input defaultText={"Password"} />
          </View>

          <View style={styles.wrapperPassword}>
            <ShowPassword />
          </View>

          <Button title={"Sign in"} />
          <Link title={"Don't have an account?"} access={"Register"} />
        </SafeAreaView>
        <StatusBar style="auto" />
      </KeyboardWrapper>
    </Background>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    // width: "100%",
    height: 450,
    alignItems: "center",
    justifyContent: "flex-end",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFF",
    marginTop: 90,
  },
  wrapperInput: {
    marginTop: 16,
    gap: 16,
  },
  wrapperPassword: {
    position: "absolute",
    top: 203,
    left: 300,
  },
  wrapperTitle: {
    marginBottom: 20,
  },
});
