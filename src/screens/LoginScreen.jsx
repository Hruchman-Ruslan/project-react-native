import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Title } from "../components/Title";
import { StatusBar } from "expo-status-bar";
import { Link } from "../components/Link";
import { Background } from "../components/Background";
import { KeyboardWrapper } from "../components/KeyboardWrapper";
import { ShowPassword } from "../components/ShowPassword";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authLogInUser } from "../redux/auth/authOperations";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
});

const initialState = {
  email: "",
  password: "",
};

export default function LoginScreen() {
  const [state, setState] = useState(initialState);
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const handleTogglePassword = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleFocusInput = () => {
    setIsFocused(true);
  };

  const handleBlurInput = () => {
    setIsFocused(false);
  };

  const inputStyle = isFocused
    ? [styles.input, styles.inputFocus]
    : styles.input;

  const handleClickOnText = () => {
    navigation.navigate("RegistrationScreen");
  };

  return (
    <Formik
      initialValues={initialState}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const resultAction = await dispatch(authLogInUser(values));

          if (authLogInUser.rejected.match(resultAction)) {
            Alert.alert("User not found. Please check your credentials.");
          } else {
            navigation.navigate("BottomNavigator");
          }
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
              <Title title={"Sign in"} />

              <View style={styles.inputWrapper}>
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
                <Text style={styles.buttonText}>Sign In</Text>
              </TouchableOpacity>

              <Link
                title={"Don't have an account? Register"}
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
  input: {
    position: "relative",
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
  errorTextEmail: {
    position: "absolute",
    color: "#FF6C00",
    marginTop: 5,
    fontSize: 16,
    fontFamily: "rb-regular",
    textAlign: "center",
    fontWeight: "700",
    top: -35,
    bottom: -20,
    left: 0,
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
});
