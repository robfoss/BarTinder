
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants'
import { NavigationContainer } from '@react-navigation/native';
import { url } from './config'
import Home from './screens/Home'
import Onboarding from './screens/Onboarding'

import RootStackScreen from './screens/RootStackScreen';

import axios from 'axios'
export default function App() {
  // axios.get(`${url}/api/user/signup`)
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
