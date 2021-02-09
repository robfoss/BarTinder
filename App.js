
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants'
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home'
import Onboarding from './screens/Onboarding'

import RootStackScreen from './screens/RootStackScreen';


export default function App() {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
});
