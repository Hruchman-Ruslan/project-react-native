import { KeyboardAvoidingView, Platform, Keyboard } from "react-native";
import React, { useState, useEffect } from "react";

export const KeyboardWrapper = ({ children, screenType }) => {
  const [keyboardStatus, setKeyboardStatus] = useState(0);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      if (screenType === "Registration") setKeyboardStatus(79);
      if (screenType === "Login") setKeyboardStatus(500);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      if (screenType === "Registration") setKeyboardStatus(0);
      if (screenType === "Login") setKeyboardStatus(0);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{
        paddingTop: keyboardStatus,
        width: "100%",
        justifyContent: "center",
      }}
    >
      {children}
    </KeyboardAvoidingView>
  );
};
