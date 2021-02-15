import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { url } from '../config';
import axios from "axios";

import Title from './Title'
import Subtitle from './Subtitle'




// ********* FAVORITES PAGE/SEARCH RESULTS PAGE CARD LAYOUT *********



const BlockCard = ({ favorites }) => {
    const image = {
        uri: url + favorites.image,
    }
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <View style={styles.contentContainer}>
                <Title>{favorites.name}</Title>
                <Subtitle>{favorites.description}</Subtitle>
                <Text>{favorites.ingredients}</Text>
                <Text>{favorites.directions}</Text>
            </View>
        </View>
    )
}

export default BlockCard

const styles = StyleSheet.create({
    container: {
        height: 800,
        width: '100%',
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#fff',
        marginTop: 15

    },
    image: {
        width: '70%',
        height: 600
    },
    contentContainer: {
        padding: 5
    }
})
