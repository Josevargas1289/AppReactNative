import { Text, View, TouchableNativeFeedback } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const Profile = () => {
  return (
    <View className="flex-row mt-3 p-3 justify-between items-center">
      <TouchableNativeFeedback>
        <AntDesign name="arrowleft" size={20} color="white" />
      </TouchableNativeFeedback>
      <Text className="text-white font-medium text-base">Profile</Text>
      <Ionicons name="notifications-outline" size={20} color="white" />
    </View>
  );
};

export default Profile;
