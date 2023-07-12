import { KeyboardAvoidingView, Platform, Keyboard } from "react-native";
import React, { useState, useEffect } from "react";

export const KeyboardWrapper = ({ children }) => {
  const [keyboardStatus, setKeyboardStatus] = useState(70);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus(0);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus(70);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ paddingTop: keyboardStatus, width: "100%" }}
    >
      {children}
    </KeyboardAvoidingView>
  );
};
