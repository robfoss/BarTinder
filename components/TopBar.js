import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'






const topbarStack = createStackNavigator()
export default function TopBar({ navigation }) {
  return (

    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('BarMap')}>
        <FontAwesome5 name='search' size={28} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <FontAwesome5 name='glass-martini-alt' size={28} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('UserPage')}>
        <FontAwesome5 name='user' size={28} color="#000" />
      </TouchableOpacity>
    </View>

  )
}


const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 5.46,
    elevation: 9
  }
})