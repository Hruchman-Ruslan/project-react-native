import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Title } from "../components/Title";
import { StatusBar } from "expo-status-bar";
import { Link } from "../components/Link";
import { AddPhoto } from "../components/AddPhoto";
import { KeyboardWrapper } from "../components/KeyboardWrapper";
import { Background } from "../components/Background";
import { ShowPassword } from "../components/ShowPassword";
import { useDispatch } from "react-redux";
import { authSignUpUser } from "../redux/auth/authOperations";
import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  login: Yup.string().required("Login is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
});

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen() {
  const [state, setState] = useState(initialState);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [avatar, setAvatar] = useState("");
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const handleTogglePassword = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const chooseImage = async () => {
    try {
      const permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!permissionResult.granted) {
        Alert.alert(
          "Permission Denied",
          "You need to grant permission to access the media library."
        );
        return;
      }

      const imagePickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!imagePickerResult.canceled) {
        if (imagePickerResult.assets.length > 0) {
          const chosenImage = imagePickerResult.assets[0];
          setAvatar(chosenImage.uri);
        }
      }
    } catch (error) {
      Alert.alert("Error", `${error.message}`);
    }
  };
  //   if (!state.email || !state.password || !state.login) {
  //     Alert.alert("Fill in all fields please!");
  //     return;
  //   }

  //   dispatch(authSignUpUser({ ...state, avatar }));
  //   setState(initialState);
  //   navigation.navigate("BottomNavigator");
  // };

  const handleClickOnText = () => {
    navigation.navigate("LoginScreen");
  };

  const inputStyle = isFocused
    ? [styles.input, styles.inputFocus]
    : styles.input;

  const handleFocusInput = () => {
    setIsFocused(true);
  };

  const handleBlurInput = () => {
    setIsFocused(false);
  };

  return (
    <Formik
      initialValues={initialState}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        try {
          dispatch(authSignUpUser({ ...values, avatar }));
          setState(initialState);
          navigation.navigate("BottomNavigator");
        } catch (error) {
          Alert.alert("An error occurred. Please try again later.");
        }
        setSubmitting(false);
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isSubmitting,
      }) => (
        <Background>
          <KeyboardWrapper>
            <SafeAreaView style={styles.wrapper}>
              <AddPhoto avatar={avatar} onPress={chooseImage} />
              <Title title={"Registration"} />

              <View style={styles.inputWrapper}>
                {touched.login && errors.login && (
                  <Text style={styles.errorTextLogin}>{errors.login}</Text>
                )}
                <TextInput
                  style={inputStyle}
                  onFocus={handleFocusInput}
                  placeholder={"Login"}
                  onChangeText={handleChange("login")}
                  onBlur={(handleBlur("login"), handleBlurInput)}
                  value={values.login}
                  name="login"
                />

                {touched.email && errors.email && (
                  <Text style={styles.errorTextEmail}>{errors.email}</Text>
                )}
                <TextInput
                  style={inputStyle}
                  onFocus={handleFocusInput}
                  onBlur={(handleBlur("email"), handleBlurInput)}
                  placeholder={"Email"}
                  onChangeText={handleChange("email")}
                  value={values.email}
                  name="email"
                />

                {touched.password && errors.password && (
                  <Text style={styles.errorTextPassword}>
                    {errors.password}
                  </Text>
                )}
                <TextInput
                  style={inputStyle}
                  onFocus={handleFocusInput}
                  onBlur={(handleBlur("password"), handleBlurInput)}
                  placeholder={"Password"}
                  secureTextEntry={!isPasswordVisible}
                  autoCapitalize="none"
                  onChangeText={handleChange("password")}
                  value={values.password}
                  name="password"
                />
                <ShowPassword
                  isPasswordVisible={isPasswordVisible}
                  onTogglePassword={handleTogglePassword}
                />
              </View>

              <TouchableOpacity
                style={styles.button}
                onPress={handleSubmit}
                disabled={isSubmitting}
              >
                <Text style={styles.buttonText}>Sign up</Text>
              </TouchableOpacity>
              <Link
                title={"Already have an account? Sign In"}
                handleClickOnText={handleClickOnText}
              />
            </SafeAreaView>
          </KeyboardWrapper>
          <StatusBar style="auto" />
        </Background>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFF",
    paddingTop: 90,
    paddingHorizontal: 16,
    paddingBottom: 50,
    alignItems: "center",
  },
  inputWrapper: {
    marginTop: 10,
    width: "100%",
    marginBottom: 27,
    gap: 16,
  },
  button: {
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginBottom: 16,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  buttonText: {
    fontFamily: "rb-regular",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    color: "#FFF",
  },
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
  errorTextEmail: {
    position: "absolute",
    color: "#FF6C00",
    marginTop: 5,
    fontSize: 16,
    fontFamily: "rb-regular",
    textAlign: "center",
    fontWeight: "700",
    top: 75,
    left: 210,
    right: 0,
  },
  errorTextPassword: {
    position: "absolute",
    color: "#FF6C00",
    marginTop: 5,
    fontSize: 16,
    fontFamily: "rb-regular",
    textAlign: "center",
    fontWeight: "700",
    bottom: -15,
    left: 0,
    right: 0,
  },
  errorTextLogin: {
    position: "absolute",
    color: "#FF6C00",
    marginTop: 5,
    fontSize: 16,
    fontFamily: "rb-regular",
    textAlign: "center",
    fontWeight: "700",
    top: -35,
    left: 0,
    right: 0,
  },
});
