import React from "react";
import {  Text, View } from "react-native";
import Constants from 'expo-constants';
import 'react-native-gesture-handler';


import HomeView from "./src/views/HomeView";
import Profile from "./src/views/ProfileView";
import Navigation from "./navigation";

export default function App() {
  return (
    <View style={{
      marginTop: Constants.statusBarHeight, 
      flexGrow: 1,
      backgroundColor: "#232A3E"
  }}>
     {/* <HomeView/> */}
     {/* <Profile/> */}
     <Navigation/>
  </View>
  )
}
