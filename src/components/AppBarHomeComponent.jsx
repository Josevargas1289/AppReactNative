import React, { Component } from 'react'
import { Text, View, TouchableNativeFeedback, Alert } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons';
 


const AppBarComponent =() => {
  
    return (
      <View className = "flex-row  p-3 pt-6 justify-between items-start bg-[#232A3E] w-full h-full ">
        <TouchableNativeFeedback>
        <SimpleLineIcons name="menu" size={20} color="white" />
        </TouchableNativeFeedback>
        <Text className = "text-white font-medium text-base">Home</Text>
        <View className= "w-7 h-7 bg-slate-400 rounded-full"></View>
      </View>
    )
  
}
export default AppBarComponent;
