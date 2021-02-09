import * as React from 'react';
import { StatusBar, Animated, Text, Image, View, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import { Asset } from 'expo-asset';


const { width, height } = Dimensions.get('screen');




const foxlogo = Asset.fromModule(require('../assets/smallfox2.png')).uri;
const bartinderlogo = Asset.fromModule(require('../assets/bartinderlogo.png')).uri
const bartinderlogoCab = Asset.fromModule(require('../assets/bartinderlogoCab.png')).uri

const bgs = ['#000', '#360c10', '#000', '#000'];
const DATA = [
    {
        "key": "3571572",
        "title": "FossTheDeveloper.com",
        "description": "Presents",
        "image": bartinderlogo
    },
    {
        "key": "3571747",
        "title": "BarTinder",
        "description": "",
        "image": bartinderlogoCab
    },
    {
        "key": "3571680",
        "title": "Inverse attitude-oriented system engine",
        "description": "The ADP array is down, compress the online sensor so we can input the HTTP panel!",
        "image": bartinderlogo
    },
    {
        "key": "3571603",
        "title": "Monitored global data-warehouse",
        "description": "We need to program the open-source IB interface!",
        "image": bartinderlogo
    }
]

const Indicator = ({ scrollX }) => {

    return <View style={{ position: 'absolute', bottom: 100, flexDirection: 'row' }}>
        {DATA.map((_, index) => {
            const inputRange = [(index - 1) * width, index * width, (index + 1) * width]
            const scale = scrollX.interpolate({
                inputRange,
                outputRange: [0.8, 1.4, 0.8],
                extrapolate: 'clamp'
            });
            const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0.6, 0.9, 0.6],
                extrapolate: 'clamp'
            });
            return <Animated.View
                key={`indicator-${index}`}
                style={{
                    height: 10,
                    width: 10,
                    borderRadius: 5,
                    backgroundColor: '#fff',
                    opacity,
                    margin: 10,
                    transform: [
                        {
                            scale,
                        }
                    ]
                }}
            />
        })}
    </View>
}


const Backdrop = ({ scrollX }) => {
    const backgroundColor = scrollX.interpolate({
        inputRange: bgs.map((_, i) => i * width),
        outputRange: bgs.map(bg => bg)
    })
    return <Animated.View
        style={[StyleSheet.absoluteFillObject,
        {
            backgroundColor,
        }]}
    />
}

const Square = ({ scrollX }) => {
    const YOLO = Animated.modulo(Animated.divide(
        Animated.modulo(scrollX, width),
        new Animated.Value(width)
    ), 1);

    const rotate = YOLO.interpolate({
        inputRange: [0, .5, 1],
        outputRange: ['35deg', '0deg', '35deg']
    });
    const translateX = YOLO.interpolate({
        inputRange: [0, .5, 1],
        outputRange: [0, -height, 0]
    })
    return (
        <Animated.View
            style={{
                width: height,
                height: height,
                backgroundColor: '#fff',
                borderRadius: 86,
                position: 'absolute',
                top: -height * 0.6,
                left: -height * 0.3,
                transform: [{
                    rotate,
                },
                {
                    translateX
                }
                ]
            }}
        />
    )

}

export default function Onboarding() {
    const scrollX = React.useRef(new Animated.Value(0)).current
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <Backdrop scrollX={scrollX} />
            <Square scrollX={scrollX} />
            <Animated.FlatList
                data={DATA}
                keyExtractor={item => item.key}
                horizontal
                scrollEventThrottle={32}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false }
                )}
                contentContainerStyle={{ paddingBottom: 100 }}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                renderItem={({ item }) => {
                    return <View style={{ width, alignItems: 'center' }}>
                        <View style={{ flex: 0.7, justifyContent: 'center', padding: 20 }}>
                            <Image
                                source={{ uri: item.image }}
                                style={{
                                    width: width * 2,
                                    height: width * 2,
                                    resizeMode: 'contain',
                                    marginLeft: 60
                                }} />
                        </View>
                        <View style={{ flex: .3 }}>
                            <Text style={{ color: '#fff', fontWeight: '800', fontSize: 28, marginBottom: 10 }}>{item.title}</Text>
                            <Text style={{ color: '#fff', fontWeight: '300' }}>{item.description}</Text>
                        </View>
                    </View>
                }}
            />
            <Indicator scrollX={scrollX} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});