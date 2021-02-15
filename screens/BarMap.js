import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location'
import { Permissions } from 'expo-location'
import Yelp from '../services/Yelp'
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';



const { width, height } = Dimensions.get('screen')

const BarMap = ({ navigation }) => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [mapRegion, setMapRegion] = useState(null);
    const [bars, setBars] = useState([])


    useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
            }
            let location = await Location.getCurrentPositionAsync({});
            setMapRegion({
                longitude: location.coords.longitude,
                latitude: location.coords.latitude,
                longitudeDelta: 0.0922,
                latitudeDelta: 0.0421
            })
            //setLocation(location)
            const getBars = async () => {
                // const userLocation = Location
                // console.log(userLocation)
                const bars = await Yelp.getBars(mapRegion);
                setBars(bars)
                // console.log(bars)
                return bars
            };

            getBars();
        })();
    }, []);
    console.log(bars)
    // console.log(mapRegion)
    // const getBars = async () => {
    //     const userLocation = Location
    //     console.log(userLocation)
    //     const bars = await Yelp.getBars(userLocation);
    //     setBars(bars);
    // };

    // status = async () => {

    //     /* ... */

    //     // Add this line for some reason
    //     await getBars();
    // }
    const barMarkers = () => {
        return
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topbarContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('BarMap')}>
                    <FontAwesome5 name='search' size={28} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <FontAwesome5 name='glass-martini-alt' size={28} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('UserPage')}>
                    <FontAwesome5 name='user' size={28} color="#000" />
                </TouchableOpacity>
            </View>

            <View>
                <StatusBar style="dark" />
                <MapView initialRegion={mapRegion} mapType='hybrid' style={styles.mapView} >
                    <Marker coordinate={mapRegion} title="Me">
                        <View style={styles.circle}>
                            <View style={styles.stroke} />
                            <View style={styles.core} />
                        </View>
                    </Marker>
                    {bars.map((bar) => <Marker coordinate={bar.coords} title={`${bar.name}`} />)}
                    {/* {bars.length && bars.map((bar, i) => {
                        console.log(bar)
                        return <Marker coordinate={bar.coords} >
                            <View style={styles.circle}>
                                <Text>{bar.name}</Text>
                            </View>
                        </Marker>
                    })} */}
                </MapView>
            </View>
        </SafeAreaView>
    )
}

export default BarMap

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width,
        height
    },
    mapView: {
        width,
        height
    },
    circle: {
        width: 26,
        height: 26,
        borderRadius: 50,
        shadowColor: '#555',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.9
    },
    stroke: {
        width: 26,
        height: 26,
        borderRadius: 50,
        backgroundColor: '#fff',
        zIndex: 1
    },
    core: {
        width: 24,
        height: 24,
        position: 'absolute',
        top: 1,
        left: 1,
        right: 1,
        bottom: 1,
        backgroundColor: 'red',
        zIndex: 2,
        borderRadius: 50
    },
    topbarContainer: {
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
