import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Title = ({ children, numberOfLines = 2 }) => {
    return (

        <Text style={{ fontWeight: 'bold', fontSize: 18 }} numberOfLines={numberOfLines}>{children}</Text>

    )
}

export default Title

