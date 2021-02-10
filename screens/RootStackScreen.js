import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'


import Onboarding from './Onboarding'
import SignInScreen from './SignInScreen'
import SignUpScreen from './SignUpScreen'
import SplashScreen from './SplashScreen'
import Home from './Home'

const RootStack = createStackNavigator()

const RootStackScreen = ({ navigation }) => {
    return (
        <RootStack.Navigator headerMode='none'>
            {/* <RootStack.Screen name="Onboarding" component={Onboarding}/> */}
            <RootStack.Screen name="SplashScreen" component={SplashScreen} />
            <RootStack.Screen name="SignInScreen" component={SignInScreen} />
            <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
            {/* <RootStack.Screen name="Home" component={Home} /> */}
        </RootStack.Navigator>
    )
}

export default RootStackScreen;
