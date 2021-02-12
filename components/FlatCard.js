import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { url } from '../config';
import axios from "axios";




// ********* LIST VIEW *********



const FlatCard = () => {
    return (
        <View style={styles.container}>
            <Image source={image} style={style.image} />
            <View style={styles.contentContainer}>
                <Text style={styles.titleFont}>{cocktails.name}</Text>
                <Text style={styles.secondaryFont}>{cocktails.ingredients}</Text>
                <Text style={styles.secondaryFont}>{cocktails.directions}</Text>
            </View>
        </View>
    )
}

export default FlatCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 10,
        height: 100
    },
    image: {
        flex: 0.35,
        height: '100%'
    },
    contentContainer: {
        flex: 0.65,
        paddingHorizontal: 5
    },
    titleFont: {
        fontWeight: 'bold',
        fontSize: 18
    },
    secondaryFont: {
        fontSize: 16
    }
})
