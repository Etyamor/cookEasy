import React from 'react';
import { TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View className="flex flex-row px-4 py-3 gap-4 items-center rounded-3xl bg-light-200">
      <Ionicons name="search" size={16} />
      <TextInput
        className="font-inter text-sm text-dark-500"
        placeholder="Search..."
        placeholderTextColor="#8F9098"
      />
    </View>
  );
};

export default SearchBar;