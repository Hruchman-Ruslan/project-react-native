import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

export const Input = ({ defaultText }) => {
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
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: 343,
    height: 50,
    flexShrink: 0,
    borderRadius: 8,
    paddingLeft: 16,
    paddingHorizontal: 16,
    color: "#212121",
    fontFamily: "rb-regular",
    fontSize: 16,
    lineHeight: 16,
    backgroundColor: "#F6F6F6",
  },
  inputFocus: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#FF6C00",
  },
});
