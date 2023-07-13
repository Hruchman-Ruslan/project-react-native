import React from "react";
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

export const RegistrationScreen = () => {
  return (
    <Background>
      <KeyboardWrapper screenType="Registration">
        <SafeAreaView style={styles.wrapper}>
          <AddPhoto />
          <Title title={"Registration"} />

          <View style={styles.wrapperInput}>
            <Input defaultText={"Login"} />
            <Input defaultText={"Email"} />
            <Input defaultText={"Password"} />
            <ShowPassword />
          </View>

          <Button title={"Register"} />
          <Link title={"Already have an account? Sign In"} />
        </SafeAreaView>
      </KeyboardWrapper>
      <StatusBar style="auto" />
    </Background>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 549,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFF",
    paddingTop: 92,
    paddingHorizontal: 16,
    paddingBottom: 113,
  },
  wrapperInput: {
    marginBottom: 27,
    gap: 16,
  },
});
