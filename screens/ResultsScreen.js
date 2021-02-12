import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import FlatCard from '../components/FlatCard'





const ResultsScreen = ({ visible, data, notFound }) => {
    const navigation = useNavigation()
    if (!visible) return null;
    if (visible && data.length-- - 0 && !notFound) return null;
    if (notFound) return <Text>{notFound}</Text>
    //COCKTAILCARD WILL BE THE DISPLAY CARD FOR DIRECTIONS
    return (
        <View style={styles.container}>
            <ScrollView>
                {data.map((cocktails) => <FlatCard cocktails={cocktails} key={cocktails.id} onPress={() => navigation.navigate('CocktailCard', { cocktails })} />)}
            </ScrollView>
        </View>
    )
}

export default ResultsScreen

const styles = StyleSheet.create({
    container: {

    }
})
