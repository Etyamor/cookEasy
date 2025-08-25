import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from "react-native";

const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Drinks'];

const Categories = () => {
  const [selected, setSelected] = useState('All');

  return (
    <View className="h-[30px]">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, idx) => (
          <TouchableOpacity key={idx} onPress={() => setSelected(category)}>
            <View>
              <Text
                className={`py-2 text-sm w-20 text-center ${selected === category ? 'font-interBold text-dark-500' : 'font-inter text-dark-200'}`}
              >
                {category}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;