import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { Button } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Splash = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/bartinderlogo.png")}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.title}>Good Drinks & Good Times</Text>
        <Button
          icon=""
          mode="contained"
          color="#ffff"
          borderRadius="80px"
          fontWeight="bold"
          onPress={() => navigation.navigate("SignInScreen")}
        >
          Sign in
        </Button>
        <Button
          icon=""
          mode="outlined"
          color="#000"
          borderRadius="80px"
          fontWeight="bold"
          onPress={() => navigation.navigate("SignUpScreen")}
        >
          Sign up
        </Button>
      </View>
    </View>
  );
};

export default Splash;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.88;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#ffff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingVertical: 30,
    paddingHorizontal: 30,
    color: "#ffff",
  },
  logo: {
    width: height_logo,
    height: height_logo,
    marginTop: 145,
    marginLeft: 35,
  },
  title: {
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 13,
  },
  text: {
    color: "grey",
    marginTop: 5,
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },

  customButton: {
    padding: 20,
    width: 200,
    borderRadius: 80,
  },
});
