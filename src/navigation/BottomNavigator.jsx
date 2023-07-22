import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "../screens/PostsScreen";
import CreatePostsScreen from "../screens/CreatePostsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { SimpleLineIcons, Feather, AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { height: 70, paddingVertical: 10 },
        headerTitleAlign: "center",
      }}
    >
      <Tab.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <SimpleLineIcons name="grid" size={size} color={color} />
          ),
          tabBarShowLabel: false,
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 10 }}>
              <Feather name="log-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: () => (
            <AntDesign name="pluscircle" size={40} color="#FF6C00" />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
