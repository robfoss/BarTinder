import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity, Dimensions } from "react-native";
import Constants from "expo-constants";
import axios from "axios";
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import TopBar from '../components/TopBar'
import BottomBar from "../components/BottomBar";
import Swipes from "../components/Swipes";
import { url } from '../config';


//look-up useEffect again - causing errors
//look-up useRef
//look at gesture docs again for swipe handler
const height = Dimensions.get('screen')
export default function Home({ navigation }) {
  const [cocktails, setCocktails] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const swipesRef = useRef(null);


  // const addFavorite =()=>{
  //   let data = {
  //     "cocktail_id": "id",
  //     "user_id": "id"
  //   }
  // }
  const newFavorite = async (cocktail_id) => {
    // console.log('*************** HOMESCREEN FAVORITES TOP *************')
    try {
      const res = await axios.put(`${url}/api/user/newfavorite/${cocktail_id}`)
      // headers: {
      //   'Accept': 'application/json',
      //   'Content-Type': 'application/json'

      // console.log('*************** HOMESCREEN FAVORITES *************')
      // console.log(res.data)
      setFavorites(res.data)
    } catch (error) {
      console.log(error)
    }
  }




  const fetchCocktails = async () => {
    try {
      const res = await axios.get(`${url}/api/cocktails/cocktailcards/:id`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      setCocktails(res.data)
    } catch (error) {
      console.log(error);
      Alert.alert("Error getting cocktails", "", [
        { text: "Retry", onPress: () => console.log(error) },
      ]);
    }
  };






  useEffect(() => {
    fetchCocktails();
  }, []);

  const handleLike = (cocktail_id) => {
    console.log('**************** 8888     HANDLELIKE   8888 ********************')
    console.log(cocktail_id)
    newFavorite(cocktail_id);
    nextCocktail();
    console.log("Left");
  };

  const handlePass = () => {
    console.log("pass");
    nextCocktail();
  };

  const nextCocktail = () => {
    const nextIndex =
      cocktails.length - 2 === currentIndex ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  const handLikePress = () => {
    swipesRef.current.openLeft();
  };

  const handlePassPress = () => {
    swipesRef.current.openRight();
  };

  return (


    <View style={styles.container}>
      <View style={[styles.topBarcontainer]}>
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
      <View style={styles.swipes}>
        {cocktails.length > 1 &&
          cocktails.map(
            (cocktails, index) =>
              currentIndex === index && (
                <Swipes
                  key={index}
                  ref={swipesRef}
                  currentIndex={currentIndex}
                  cocktails={cocktails}
                  handleLike={() => handleLike(cocktails.id)}
                  handlePass={handlePass}
                />
              )
          )}
      </View>
      <BottomBar
        handleLikePress={handLikePress}
        handlePassPress={handlePassPress}
      />
    </View>
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
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  swipes: {
    flex: 1,
    padding: 10,
    paddingTop: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },

});
