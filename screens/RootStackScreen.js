import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";

import SplashScreen from "./SplashScreen";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";
import Onboarding from "./Onboarding";
import { createStackNavigator } from "@react-navigation/stack";

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="Onboarding" component={Onboarding} />
      <RootStack.Screen name="SignInScreen" component={SignInScreen} />
      <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
