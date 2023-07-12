import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Title } from "../components/Title";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { StatusBar } from "expo-status-bar";
import { Link } from "../components/Link";
import { AddPhoto } from "../components/AddPhoto";
import { KeyboardWrapper } from "../components/Keyboard";
import { Background } from "../components/Background";
import { ShowPassword } from "../components/ShowPassword";

export const RegistrationScreen = () => {
  return (
    <Background>
      <KeyboardWrapper>
        <SafeAreaView style={styles.wrapper}>
          <AddPhoto />
          <Title title={"Registration"} />

          <View style={styles.wrapperInput}>
            <Input defaultText={"Login"} />
            <Input defaultText={"Email"} />
            <Input defaultText={"Password"} />
          </View>

          <View style={styles.wrapperPassword}>
            <ShowPassword />
          </View>

          <Button title={"Register"} />
          <Link title={"Already have an account?"} access={"Sign In"} />
        </SafeAreaView>
      </KeyboardWrapper>
      <StatusBar style="auto" />
    </Background>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 400,
    height: 549,
    alignItems: "center",
    justifyContent: "flex-end",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFF",
    paddingTop: 78,
  },
  wrapperInput: {
    marginTop: 16,
    gap: 16,
  },
  wrapperPassword: {
    position: "absolute",
    top: 303,
    left: 300,
  },
});
