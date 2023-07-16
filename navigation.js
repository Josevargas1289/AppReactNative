import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ajustes from "./src/views/AjustesView";
import SearchView from "./src/views/SearchView";
import StackScreen from "./src/views/StackScreen";
import { View } from "react-native";
import Home from './src/views/HomeView'

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
        headerShown: false,
        
        
    }}
    >
     
      <Tab.Screen name="Search" component={SearchView} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Ajustes} />

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
