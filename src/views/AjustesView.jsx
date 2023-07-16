import { Text, View, TouchableNativeFeedback } from "react-native";
import { AntDesign, Ionicons  } from '@expo/vector-icons'; 

const AjustesView = () => {
  return (
    <View className="flex-row  p-3 pt-6 justify-between items-start bg-[#232A3E] w-full h-full">
      <TouchableNativeFeedback>
      <AntDesign name="arrowleft" size={20} color="white" />
      </TouchableNativeFeedback>
      <Text className="text-white font-medium text-base">Settings</Text>
      <Ionicons name="notifications-outline" size={20} color="white" />
    </View>
  );
};

export default AjustesView;
