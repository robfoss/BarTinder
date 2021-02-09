import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Constants from "expo-constants";
import axios from "axios";

import TopBar from '../components/TopBar'
import BottomBar from "../components/BottomBar";
import Swipes from "../components/Swipes";


//look-up useEffect again - causing errors
//look-up useRef
//look at gesture docs again for swipe handler

export default function Home() {
  const [cocktails, setCocktails] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const swipesRef = useRef(null);

  const fetchCocktails = async () => {
    try {
      const { data } = await axios.get("/cocktails");
      console.log(data[0])
      setCocktails(data);
    } catch (error) {
      console.log(error);
      Alert.alert("Error getting cocktails", "", [
        { text: "Retry", onPress: () => console.log(data[0]) },
      ]);
    }
  };

  useEffect(() => {
    fetchCocktails();
  }, []);

  const handleLike = () => {
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
  };

  const handLikePress = () => {
    swipesRef.current.openLeft();
  };

  const handlePassPress = () => {
    swipesRef.current.openRight();
  };

  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.swipes}>
        {cocktails.length > 1 &&
          cocktails.map(
            (cocktail, index) =>
              currentIndex === index && (
                <Swipes
                  key={index}
                  ref={swipesRef}
                  currentIndex={currentIndex}
                  cocktails={cocktails}
                  handleLike={handleLike}
                  handlePass={handlePass}
                />
              )
          )}
      </View>
      <BottomBar
        handLikePress={handLikePress}
        handlePassPress={handlePassPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
