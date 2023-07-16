import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

export const Input = ({ defaultText, access, text, setText }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const inputStyle = isFocused
    ? [styles.input, styles.inputFocus]
    : styles.input;

  return (
    <TextInput
      style={inputStyle}
      placeholder={defaultText}
      onFocus={handleFocus}
      onBlur={handleBlur}
      secureTextEntry={access}
      value={text}
      onChangeText={setText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderRadius: 8,
    paddingLeft: 16,
    paddingHorizontal: 16,
    color: "#212121",
    fontFamily: "rb-regular",
    fontSize: 16,
    lineHeight: 16,
    backgroundColor: "#F6F6F6",
    fontWeight: "700",
  },
  inputFocus: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#FF6C00",
  },
});
