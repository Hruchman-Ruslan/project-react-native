import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import PostsScreen from "../screens/PostsScreen";
import CreatePostsScreen from "../screens/CreatePostsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { SimpleLineIcons, Feather, AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { height: 70, paddingVertical: 10 },
        headerTitleAlign: "center",
      }}
    >
      <Tab.Screen
        name="Posts Screen"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <SimpleLineIcons name="grid" size={size} color={color} />
          ),
          tabBarShowLabel: false,
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 10 }}>
              <Feather
                name="log-out"
                size={24}
                color="#BDBDBD"
                onPress={() => {
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
          tabBarIcon: () => (
            <AntDesign name="pluscircle" size={40} color="#FF6C00" />
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
        }}
      />
      <Tab.Screen
        name="Profile Screen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
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
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
