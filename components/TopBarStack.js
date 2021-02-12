import React from 'react'
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home'
import BarMap from '../screens/BarMap'
import UserPage from '../screens/UserPage'

const BarStack = createStackNavigator();

const TopBarStack = () => {
    return (

        <BarStack.Navigator>
            <BarStack.Screen name="Bar Map" component={BarMap} />
            <BarStack.Screen name="User Page" component={UserPage} />
            <BarStack.Screen name="Home" component={Home} />
        </BarStack.Navigator>

    )
}

export default TopBarStack
