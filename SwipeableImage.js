import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

//Description could be too long, abriv if needed.
//Add image

export default function SwipeableImage({ cocktails, willLike, willPass }) {
  return (
    <View>
      <Image source={cocktails.image} style={styles.photo} />
      {willLike && (
        <View style={styles.likeBox}>
          <Text style={{ ...styles.textPrimary, color: "#fe019a" }}>
            Cheers!
          </Text>
        </View>
      )}
      {willPass && (
        <View style={styles.passBox}>
          <Text style={{ ...styles.textPrimary, color: "#30e7ed" }}>Nope</Text>
        </View>
      )}
      <View style={styles.textContainer}>
        <View style={styles.textRow}>
          <Text style={[styles.textPrimary, styles.textShadow]}>
            {cocktails.name}
          </Text>
        </View>
        <View style={styles.textRow}>
          <Text style={([styles.textSecondary], styles.textShadow)}>
            {cocktails.description}
          </Text>
        </View>
      </View>
    </View>
  );
}

const boxStyle = {
  position: "absolute",
  top: "50%",
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 20,
  paddingRight: 20,
  borderWidth: 3,
  borderRadius: 10,
};

const styles = StyleSheet.create({
  likeBox: {
    ...boxStyle,
    left: 40,
    borderColor: "#fe019a",
  },
  passBox: {
    ...boxStyle,
    right: 40,
    borderColor: "#30e7ed",
  },
  photo: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 20,
  },

  textContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
  },
  textRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  textPrimary: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
  },
  textSecondary: {
    color: "white",
    marginLeft: 10,
    fontSize: 21,
  },
  textShadow: {
    textShadowColor: "rgba(0, 0, 0, 0.80)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
