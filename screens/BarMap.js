import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location'
import TopBar from '../components/TopBar'
import Yelp from '../services/Yelp'


const { width, height } = Dimensions.get('screen')

const BarMap = ({ navigation }) => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [mapRegion, setMapRegion] = useState(null);
    const [bars, setBars] = useState(null)


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
            // setLocation(location)
        })();
    }, []);

    const getBars = async () => {
        const userLocation = location
        const bars = await Yelp.getBars(userLocation);
        setBars({ bars });
    };

    status = async () => {

        /* ... */

        // Add this line for some reason
        await getBars();
    }




    return (
        <>
            <TopBar />
            <View style={styles.container}>
                <StatusBar style="dark" />
                <MapView initialRegion={mapRegion} mapType='hybrid' style={styles.mapView} places={bars}>
                    <Marker coordinate={mapRegion} title="Me">
                        <View style={styles.circle}>
                            <View style={styles.stroke} />
                            <View style={styles.core} />
                        </View>
                    </Marker>
                </MapView>
            </View>
        </>
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
        height,
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
    }
})
