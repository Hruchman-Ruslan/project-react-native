import {
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState, useEffect } from "react";

export const KeyboardWrapper = ({ children, screenType }) => {
  const [keyboardStatus, setKeyboardStatus] = useState(0);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      if (screenType === "Registration") setKeyboardStatus(79);
      if (screenType === "Login") setKeyboardStatus(50);
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
    </TouchableWithoutFeedback>
  );
};
