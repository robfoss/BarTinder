import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';


export default function TopBar() {
    return (
        <View style={styles.container}>
            <FontAwesome5 name='search' size={28} color="#000" />
            <FontAwesome5 name='glass-martini-alt' size={28} color="#000" />
            <FontAwesome5 name='user' size={28} color="#000" />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
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