import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { url } from '../config'
import ResultsScreen from '../screens/ResultsScreen'




const searchCocktails = async (query) => {
    if (!query) return {}
    try {
        const response = await axios.post(`${url}/api/cocktails/cocktailSearch/${query}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        return response;
        //   setCocktails(res.data)
    } catch (error) {
        console.log(error);
        Alert.alert("Error getting cocktails", "", [
            { text: "Retry", onPress: () => console.log(error) },
        ]);
    }
};




const SearchBar = () => {
    return (
        <>
            <View style={styles.container}>
                <TextInput style={styles.searchInput} placeholder='Search Cocktail Names, Ingredients'></TextInput>
            </View>
            <ResultsScreen />
        </>
    )
}



const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 8,
        justifyContent: 'center'
    },

    searchInput: {
        width: '100%',
        height: '100%',
        paddingLeft: 8,
        fontSize: 16
    }
})

export default SearchBar
