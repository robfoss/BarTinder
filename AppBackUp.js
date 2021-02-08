import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RootStackScreen from "./screens/RootStackScreen";
import Onboarding from "./screens/Onboarding";
import Home from "./screens/Home";

import SplashScreen from "./screens/SplashScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Home />
    // <NavigationContainer>
    //   <RootStackScreen />
    //   {/* <Onboarding /> */}
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
