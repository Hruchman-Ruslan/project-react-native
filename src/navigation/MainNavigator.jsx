import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";

import "react-native-gesture-handler";

import RegistrationScreen from "../screens/RegistrationScreen";
import LoginScreen from "../screens/LoginScreen";
import BottomNavigator from "./BottomNavigator";
import CommentsScreen from "../screens/CommentsScreen";
import MapScreen from "../screens/MapScreen";

const MainStack = createStackNavigator();

const MainNavigator = () => {
  const isAuth = useSelector((state) => state.isAuth);
  const initialRouteName = isAuth ? "BottomNavigator" : "LoginScreen";

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName={initialRouteName}>
        <MainStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
          initialParams={{ isAuth }}
        />
        <MainStack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
          options={{ headerShown: false }}
          initialParams={{ isAuth }}
        />
        <MainStack.Screen
          name="BottomNavigator"
          component={BottomNavigator}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="CommentsScreen"
          component={CommentsScreen}
          options={{
            headerTitle: "Comments Screen",
            headerTitleAlign: "center",
          }}
        />
        <MainStack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{
            headerTitle: "Map Screen",
            headerTitleAlign: "center",
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
