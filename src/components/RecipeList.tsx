import React from 'react';
import { ScrollView, View } from "react-native";
import RecipeCard from "./RecipeCard";

const RecipeList = () => {
  return (
    <View className="flex-1">
      <ScrollView contentContainerStyle={{ paddingBottom: 16 }}>
        <View className="gap-4">
          {Array.from({ length: 20 }, (_, index) => (
            <RecipeCard key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default RecipeList;