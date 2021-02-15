import React from "react";
import { View, Image, StyleSheet, Text, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { url } from '../config';
//Description could be too long, abriv if needed.
//Add image
//Testing scrollview
export default function SwipeableImage({ cocktails, willLike, willPass }) {
    // console.log(cocktails.name)
    // console.log(cocktails.image)
    const image = {
        uri: url + cocktails.image,
    }


    return (
        <View>
            <Image source={image} style={styles.photo} />
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
                <View style={styles.textRowDesc}>
                    <Text numberOfLines={6} style={([styles.textSecondary, styles.textShadow])}>
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
        height: "99%",
        resizeMode: "stretch",
        borderRadius: 20,
    },

    textContainer: {
        position: "absolute",
        bottom: 70,
        left: 20,
    },
    textRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    textRowDesc: {
        flexDirection: "row",
        alignItems: "center",
        width: '90%'
    },
    textPrimary: {
        color: "white",
        fontSize: 35,
        fontWeight: "bold",
    },
    textSecondary: {
        color: "white",
        marginLeft: 10,
        fontSize: 20,
    },
    textShadow: {
        textShadowColor: "rgba(0, 0, 0, 0.90)",
        textShadowOffset: { width: -1, height: 2 },
        textShadowRadius: 10,
    },
});
