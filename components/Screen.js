import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'

const Screen = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

export default Screen

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: 15,
        backgroundColor: '#f7f3f3',
        flex: 1
    }
})
