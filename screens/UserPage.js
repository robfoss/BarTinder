import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';


import FlatCard from '../components/FlatCard'


export default function UserPage({ navigation }) {
  return (
    <>
      <View style={styles.topbarContainer}>
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
      <View style={styles.container}>
        <ScrollView>
          {data.map((cocktails) => <FlatCard cocktails={cocktails} key={cocktails.id} onPress={() => navigation.navigate('CocktailCard', { cocktails })} />)}
        </ScrollView>
      </View>
    </>

  );
}


const styles = StyleSheet.create({
  topbarContainer: {
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