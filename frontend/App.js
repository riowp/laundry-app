import { StatusBar } from "expo-status-bar";
import MyStack from "./stack/MyStack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar hidden />
        <MyStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

