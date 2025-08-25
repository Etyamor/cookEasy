import "./global.css"
import { View } from 'react-native';
import { useFonts, Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import RecipeList from "./src/components/RecipeList";
import SearchBar from "./src/components/SearchBar";
import Categories from "./src/components/Categories";
import FormInput from "./src/components/FormInput";
import LoginForm from "./src/components/LoginForm";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-light-100">
        <View className="flex-1 px-4 gap-y-4">
          <SearchBar />
          <Categories />
          <RecipeList />
          <LoginForm />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
