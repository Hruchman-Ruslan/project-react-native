import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import PostsScreen from "../screens/PostsScreen";
import CreatePostsScreen from "../screens/CreatePostsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { SimpleLineIcons, Feather, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { authSignOutUser } from "../redux/auth/authOperations";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 70,
          paddingVertical: 10,
        },
        headerTitleAlign: "center",
        tabBarInactiveTintColor: "#BDBDBD",
      }}
    >
      <Tab.Screen
        name="Posts Screen"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 70,
                height: 40,
                backgroundColor: focused ? "#FF6C00" : "transparent",
                borderRadius: 20,
                padding: 8,
              }}
            >
              <SimpleLineIcons
                name="grid"
                size={24}
                color="#BDBDBD"
                style={{ alignSelf: "center" }}
              />
            </View>
          ),
          tabBarShowLabel: false,
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 10 }}>
              <Feather
                name="log-out"
                size={24}
                color="#BDBDBD"
                onPress={() => {
                  dispatch(authSignOutUser());
                  navigation.navigate("LoginScreen");
                }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Create Posts Screen"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 70,
                height: 40,
                backgroundColor: focused ? "#FF6C00" : "transparent",
                borderRadius: 20,
                padding: 8,
              }}
            >
              <Ionicons
                name="add"
                size={24}
                color="#BDBDBD"
                style={{ alignSelf: "center" }}
              />
            </View>
          ),
          headerLeft: () => (
            <Feather
              name="arrow-left"
              size={24}
              color="#212121"
              style={{ paddingLeft: 16 }}
              onPress={() => {
                navigation.navigate("Posts Screen");
              }}
            />
          ),
          tabBarShowLabel: false,
          tabBarStyle: { display: "none" },
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="Profile Screen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 70,
                height: 40,
                backgroundColor: focused ? "#FF6C00" : "transparent",
                borderRadius: 20,
                padding: 8,
              }}
            >
              <Feather
                name="user"
                size={24}
                color="#BDBDBD"
                style={{ alignSelf: "center" }}
              />
            </View>
          ),
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
