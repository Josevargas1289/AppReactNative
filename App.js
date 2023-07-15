import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Constants from 'expo-constants';

import HomeView from "./src/views/HomeView";

export default function App() {
  return (
    <View style={{
      marginTop: Constants.statusBarHeight, 
      flexGrow: 1,
      backgroundColor: "#232A3E"
  }}>
     <HomeView/>
  </View>
  )
}
