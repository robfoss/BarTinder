import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { RectButton } from "react-native-gesture-handler";
import SwipeableImage from "./SwipeableImage";
import { url } from '../config'

//test and adjust rightActions to add to users favorites
//useState to keep track of onSwipeableWillLeft prop
//lookup forwardRef for bottombar buttons

function Swipes({
  cocktails,
  currentIndex,
  handleLike,
  handlePass,
  swipesRef,
}) {
  const [willLike, setWillLike] = useState(false);
  const [willPass, setWillPass] = useState(false);
  const renderLeftActions = () => {






    return (
      <RectButton style={styles.container}>
        <SwipeableImage
          cocktails={cocktails}
        ></SwipeableImage>
      </RectButton>
    );
  };
  const renderRightActions = () => {
    return (
      <RectButton style={styles.container}>
        <SwipeableImage
          cocktails={cocktails}
        ></SwipeableImage>
      </RectButton>
    );
  };
  console.log(cocktails)
  return (
    <Swipeable
      ref={swipesRef}
      friction={2}
      leftThreshold={40}
      rightThreshold={40}
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}
      onSwipeableLeftOpen={() => {
        setWillLike(false);
        handleLike();
      }}
      onSwipeableRightOpen={() => {
        setWillPass(false);
        handlePass();
      }}
      onSwipeableLeftWillOpen={() => setWillLike(true)}
      onSwipeableRightWillOpen={() => setWillPass(true)}
    >
      <SwipeableImage
        cocktails={cocktails}
        willLike={willLike}
        willPass={willPass}
      />
    </Swipeable>
  );
}

styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default React.forwardRef((props, ref) => (
  <Swipes swipesRef={ref} {...props}></Swipes>
));
