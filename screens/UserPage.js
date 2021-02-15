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
      const res = await axios.get(`${url}/api/user/favorites`)
      setFavorites(res.data)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchFavorites();
  }, []);
  console.log('**************** 88888888888 ********************')
  console.log(favorites)
  return (
    <SafeAreaView>
      <View style={styles.topbarContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('BarMap')}>
          <FontAwesome5 name='search-location' size={28} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <FontAwesome5 name='glass-martini-alt' size={28} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('UserPage')}>
          <FontAwesome5 name='user' size={28} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text>{favorites.length}</Text>
        <ScrollView>
          {favorites.map((favorites) => (
            <BlockCard favorites={favorites}
            />)
          )}
        </ScrollView>
      </View>
    </SafeAreaView>


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
  },
  photo: {
    height: "99%",
    resizeMode: "stretch",
    borderRadius: 20,
  },
})