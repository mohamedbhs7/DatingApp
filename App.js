import React, { useState } from "react";
import { View, Button, useColorScheme, StyleSheet } from "react-native";
import SignIn from "./components/sign-in/SignIn";
import DrawNavigation from "./components/Nav/DrawNavigation";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const LightTheme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, text: "black", background: "white" },
};

const CustomDarkTheme = {
  ...DarkTheme,
  colors: { ...DarkTheme.colors, text: "white", background: "black" },
};

const Stack = createNativeStackNavigator();

export default function App() {
  const systemTheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(systemTheme === "dark");
  const toggleTheme = () => setIsDarkMode((prevMode) => !prevMode);
  const theme = isDarkMode ? CustomDarkTheme : LightTheme;

  return (
    <NavigationContainer theme={theme}>
      <View style={styles.container}>
        <Button 
          title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"} 
          onPress={toggleTheme} 
          color={isDarkMode ? "yellow" : "black"} 
        />
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SignIn">
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="DrawNavigation" component={DrawNavigation} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
