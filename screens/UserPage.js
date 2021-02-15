import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { url } from '../config'


import FlatCard from '../components/FlatCard'
import BlockCard from '../components/BlockCard'
import axios from "axios";


export default function UserPage({ navigation }) {
  const [favorites, setFavorites] = useState([]);

  const fetchFavorites = async () => {
    console.log('************** USER PAGE FETCH FAVORITES *****************')
    try {
      res = await axios.get(`${url}/api/user/favorites/:user_id`)
      console.log(res.data)
      setFavorites[res.data]
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchFavorites();
  }, []);


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
          {favorites.map((favorite) => <BlockCard favorite={favorite} key={favorite.id} />)}
          {/* onPress={() => navigation.navigate('CocktailCard', { cocktails })} */}
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