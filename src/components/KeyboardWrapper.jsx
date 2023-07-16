import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";

export const KeyboardWrapper = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{
          paddingTop: 120,
          width: "100%",
          justifyContent: "center",
        }}
      >
        {children}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
