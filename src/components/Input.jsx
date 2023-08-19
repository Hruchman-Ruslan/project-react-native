import React, { useState } from "react";
import { StyleSheet, TextInput, Text } from "react-native";

export const Input = ({
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
  autoCapitalize,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState("");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleTextChange = (text) => {
    onChangeText(text);
    setError(
      text.length < 6 ? "Field is required and minimum 6 characters" : ""
    );
  };

  const inputStyle = isFocused
    ? [styles.input, styles.inputFocus]
    : styles.input;

  return (
    <React.Fragment>
      <TextInput
        style={inputStyle}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={handleTextChange}
        autoCapitalize={autoCapitalize}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </React.Fragment>
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
  errorText: {
    color: "#FF6C00",
    marginTop: 5,
    fontSize: 16,
    fontFamily: "rb-regular",
    textAlign: "center",
    fontWeight: "700",
  },
});
