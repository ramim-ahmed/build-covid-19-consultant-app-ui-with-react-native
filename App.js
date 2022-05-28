import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import React from "react";
import { StatusBar } from "react-native";
import Splash from "./src/screens/Splash";
const Stack = createNativeStackNavigator();

export default function App() {
  const [fonts] = useFonts({
    "Graphik-Medium": require("./assets/fonts/GraphikMedium.ttf"),
    "Graphik-Regular": require("./assets/fonts/GraphikRegular.ttf"),
    "Graphik-Semibold": require("./assets/fonts/GraphikSemibold.ttf"),
  });

  if (!fonts) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Splash} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
