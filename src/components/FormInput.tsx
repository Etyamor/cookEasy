import React, { useState } from 'react';
import { Text, TextInput, View, TextInputProps, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type FormInputProps = {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  hide?: boolean;
} & Omit<TextInputProps, 'value' | 'onChangeText' | 'placeholder' | 'secureTextEntry'>;

const FormInput: React.FC<FormInputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  hide,
  ...rest
}) => {
  const [isHidden, setIsHidden] = useState(!!hide);

  return (
    <View className="gap-y-2">
      {!!label && (
        <Text>{label}</Text>
      )}
      <View className="relative">
        <TextInput
          className="px-4 py-3 pr-10 rounded-xl font-inter text-sm text-dark-500 border border-light-500 focus:border-blue-500"
          placeholder={placeholder}
          placeholderTextColor="#8F9098"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isHidden}
          {...rest}
        />
        {hide && (
          <TouchableOpacity
            className="absolute right-3 top-1/2 -translate-y-1/2"
            onPress={() => setIsHidden((prev) => !prev)}
            activeOpacity={0.7}
          >
            {isHidden ? (
              <Ionicons name="eye-off-outline" size={16} />
            ) : (
              <Ionicons name="eye-outline" size={16} />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormInput;