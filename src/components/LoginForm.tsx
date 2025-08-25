import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import FormInput from "./FormInput";
import FormButton from "./FormButton";

const LoginForm = () => {
  return (
    <View className="flex-1 gap-y-4 px-2">
      <Text className="font-interBold text-2xl">Welcome!</Text>
      <FormInput placeholder="Email Address" />
      <FormInput placeholder="Password" hide={true} />
      <TouchableOpacity>
        <Text className="font-interBold text-xs text-blue-500">Forgot password?</Text>
      </TouchableOpacity>
      <FormButton title="Login" />
      <View className="flex-row justify-center gap-x-1">
        <Text className="font-inter text-xs text-dark-500">Not a member?</Text>
        <TouchableOpacity>
          <Text className="font-interBold text-xs text-blue-500">Register now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginForm;