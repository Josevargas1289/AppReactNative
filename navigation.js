import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ajustes from "./src/views/AjustesView";
import SearchView from "./src/views/SearchView";
import StackScreen from "./src/views/StackScreen";
import { View } from "react-native";
import Home from "./src/views/HomeView";
import { Feather, AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#8EBCFE",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#3D4663",
          borderTopWidth: 0,
          flex: 1 / 9,
          justifyContent: "center",
          paddingBottom: 8,
        },
      }}
    >
      <Tab.Screen
        name="Search"
        component={SearchView}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="search" size={24} color="#ccc" />
            
          ),
          
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={24} color="#ccc" />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Ajustes}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="setting" size={24} color="#ccc" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
