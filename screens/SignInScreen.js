import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
  TextInput,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { FontAwesome } from "@expo/vector-icons";
import Feather from "react-native-vector-icons/Feather"; //Maybe what's causing error?
//Go back over fontawesome icons.
//Connect page to backend route
//Search for new textinput field - autocapitalize =none
//double styles need to be in array

const SignInScreen = () => {
  const [showIcons, setShowIcons] = React.useState({
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const textInputChange = (value) => {
    if (value.length != 0) {
      setShowIcons({
        ...showIcons,
        email: value,
        check_textInputChange: true,
      });
    } else {
      setShowIcons({
        ...showIcons,
        email: value,
        check_textInputChange: false,
      });
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Cheers!</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#000" size={20} />
          <TextInput
            placeholder="Drink Responsibly and Never Drink and Drive"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(value) => textInputChange(value)}
          />
          {showIcons.textInputChange ? (
            <Feather name="check-circle" color="#000" size={20} />
          ) : null}
        </View>
        <Text
          style={[
            styles.text_footer,
            {
              marginTop: 35,
            },
          ]}
        >
          Password
        </Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#000" size={20} />
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            style={styles.textInput}
            autoCapitalize="none"
          />
          <Feather name="eye-off" color="grey" size={20} />
        </View>
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#ffff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 30,
    color: "#ffff",
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  logo: {
    width: "",
    height: "",
    marginTop: 145,
    marginLeft: 35,
  },
  title: {
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: "grey",
    marginTop: 5,
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
    borderRadius: 20,
  },
});
