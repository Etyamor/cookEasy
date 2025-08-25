import React from 'react';
import { Image, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const RecipeCard = () => {
  return (
    <View className="flex-row items-center flex-1 h-[70px] rounded-2xl bg-blue-100 overflow-hidden">
      <View>
        <Image
          source={{ uri: 'https://picsum.photos/80/80' }}
          className="shrink-0 w-20 h-full"
          style={{ width: 80, height: 70 }}
        />
      </View>
      <View className="flex-1 flex-row items-center justify-between p-4">
        <View className="space-y-1">
          <Text className="font-interBold text-sm text-dark-500">Recipe Title</Text>
          <Text className="font-inter text-xs text-dark-200">20 min</Text>
        </View>
        <Ionicons name='chevron-forward' size={20} color='#8F9098' />
      </View>
    </View>
  );
};

export default RecipeCard;