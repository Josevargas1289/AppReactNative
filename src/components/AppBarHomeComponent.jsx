import React, { Component } from 'react'
import { Text, View, TouchableNativeFeedback } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons'; 


const AppBarComponent =() => {
  
    return (
      <View className = "flex-row mt-3 p-3 justify-between items-center">
        <TouchableNativeFeedback>
        <SimpleLineIcons name="menu" size={20} color="white" />
        </TouchableNativeFeedback>
        <Text className = "text-white font-medium text-base">Home</Text>
        <View className= "w-7 h-7 bg-slate-400 rounded-full"></View>
      </View>
    )
  
}
export default AppBarComponent;
