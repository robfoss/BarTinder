import * as React from "react";
import {
  StatusBar,
  Animated,
  Text,
  Image,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Button } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity, FlatList } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("screen");
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";
import { Asset } from "expo-asset";
const bartinder = Asset.fromModule(require("../assets/bartinderlogo.png")).uri;

const Stack = createStackNavigator();

//Make onboarding disclaimers array

const backgrounds = ["#000", "#000", "#000", "#000"];
const Disclaimers = [
  {
    key: "3571572",
    title: "Welcome To BarTinder",
    description: "A Full-Stack React Native project developed by Rob Foster",
    image: bartinder,
  },
  {
    key: "3571747",
    title: "Description",
    description:
      "BarTinder was designed to be a fun and informative mobile application with a focus on cocktail recipes",
    image: bartinder,
  },
  {
    key: "3571680",
    title: "Details",
    description:
      "BarTinder was developed in React Native with the Expo library, Express (backend), and a Elephant SQL database. The logo was designed with Adobe illustrator by myself",
    image: bartinder,
  },
  {
    key: "3571603",
    title: "Disclaimer",
    description: "Remember to Drink Responsibly and NEVER Drink and Drive!",
    image: bartinder,
  },
];

const Indicator = ({ scrollX }) => {
  return (
    <View style={{ position: "absolute", bottom: 100, flexDirection: "row" }}>
      {Disclaimers.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width]; //previous slide, current slide, next slide - not breaking at the moment... make git push
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: "clamp", //to not move out of range for this particular item-test for opacity also
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.6, 0.9, 0.6],
          extrapolate: "clamp", //to not move out of range for this particular item
        });
        return (
          <Animated.View
            key={`indicator-${i}`}
            style={{
              height: 10,
              width: 10,
              borderRadius: 5,
              backgroundColor: "#fff",
              opacity,
              margin: 10,
              transform: [
                {
                  scale,
                },
              ],
            }}
          />
        );
      })}
    </View>
  );
};
//Add backdrop/background for slides
const Backdrop = ({ scrollX }) => {
  //[0, width, width * 2, ...] maybe??
  const backgroundColor = scrollX.interpolate({
    inputRange: backgrounds.map((_, i) => i * width),
    outputRange: backgrounds.map((bg) => bg),
  });
  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFillObject,
        {
          backgroundColor,
        },
      ]}
    />
  );
};
//background square - scroll animate
//add YOLO method to seesaw squaure effect
const Square = ({ scrollX }) => {
  const YOLO = Animated.modulo(
    Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)),
    1
  );
  const rotate = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["35deg", "0deg", "35deg"], //still not getting exact fluid effect desired but NOT BREAKING - STOP HERE, NO MORE TWEAKS!!!(maybe translateX sunday, watch CSS vid again)
  });
  const translateX = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -height, 0],
  });
  return (
    <Animated.View
      style={{
        width: height,
        height: height,
        backgroundColor: "#fff",
        borderRadius: 86,
        position: "absolute",
        top: -height * 0.6,
        left: -height * 0.3,
        transform: [{ rotate }, { translateX }],
      }}
    />
  );
};

export default function Onboarding({ navigation }) {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Backdrop scrollX={scrollX} />
      <Square scrollX={scrollX} />
      <Animated.FlatList
        data={Disclaimers}
        keyExtractor={(item) => item.key}
        horizontal
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsHorizontalScrollIndicator={false}
        pagingEnabled // added carousel effect
        renderItem={({ item }) => {
          return (
            <View style={{ width, alignItems: "center", padding: 20 }}>
              <View style={{ flex: 0.7, justifyContent: "center" }}>
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: width * 2,
                    height: width * 2,
                    resizeMode: "contain",
                  }}
                />
              </View>
              <View style={{ flex: 0.4 }}>
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "800",
                    fontSize: 30,
                    marginBottom: 10,
                  }}
                >
                  {item.title}
                </Text>
                <Text style={{ color: "#fff", fontWeight: "300" }}>
                  {item.description}
                </Text>
                <Button
                  icon="login-variant"
                  mode="outlined"
                  marginTop="15%"
                  onPress={() => navigation.navigate("SignUpScreen")}
                >
                  Sign In
                </Button>
                <Button
                  icon="glass-cocktail"
                  mode="outlined"
                  marginTop="5%"
                  onPress={() => navigation.navigate("SignInScreen")}
                >
                  Sign Up
                </Button>
              </View>
            </View>
          );
        }}
      />
      <Indicator scrollX={scrollX} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
