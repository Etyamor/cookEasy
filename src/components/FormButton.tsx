import React from 'react';
import { TouchableOpacity, Text, GestureResponderEvent } from 'react-native';

type ButtonProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  disabled?: boolean;
};

const FormButton: React.FC<ButtonProps> = ({ title, onPress, disabled = false }) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Text className="px-4 py-3 bg-blue-500 font-interBold text-xs text-light-100 text-center rounded-xl">{title}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;