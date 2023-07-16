import { KeyboardAvoidingView, Platform } from "react-native";

export const KeyboardWrapper = ({ children }) => {
  return (
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
  );
};
