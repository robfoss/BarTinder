import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'


import Onboarding from './Onboarding'
import SignInScreen from './SignInScreen'
import SignUpScreen from './SignUpScreen'
import SplashScreen from './SplashScreen'
import Home from './Home'
import BarMap from './BarMap'
import UserPage from './UserPage'
import TopBar from '../components/TopBar'
const RootStack = createStackNavigator()

const RootStackScreen = ({ navigation }) => {
  return (
    <RootStack.Navigator headerMode='none'>
      {/* <RootStack.Screen name="Onboarding" component={Onboarding} /> */}
      <RootStack.Screen name="SplashScreen" component={SplashScreen} />
      <RootStack.Screen name="SignInScreen" component={SignInScreen} />
      <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="BarMap" component={BarMap} />
      <RootStack.Screen name="UserPage" component={UserPage} />
    </RootStack.Navigator>
  )
}

export default RootStackScreen;
