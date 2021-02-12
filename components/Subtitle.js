import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Subtitle = ({ children, numberOfLines = 2 }) => {
    return (

        <Text style={{ fontSize: 18 }} numberOfLines={numberOfLines}>{children}</Text>

    )
}

export default Subtitle