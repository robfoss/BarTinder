import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Platform, TextInput, StatusBar } from 'react-native'
import * as Animatable from 'react-native-animatable';
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import axios from 'axios'
import { url } from '../config'

export default function SignInScreen({ navigation }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let json = JSON.stringify({ email: email, password: password })

    const processSignIn = async () => await axios.post(`${url}/api/user/login`, json,
        {

            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
        .then((res) => {
            console.log(res)
            return res
        })

        .then(() => navigation.navigate('Home'))

        .catch((err) => {
            console.log(err)
        })

    const [data, setData] = useState({
        // email: '',
        // password: '',
        check_textInputChange: false,
        secureTextEntry: true
    });


    const textInputChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        })
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }



    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>Cheers!  <FontAwesome5 name='glass-cheers' color='#fff' size={30} /></Text>

            </View>
            <Animatable.View
                style={styles.footer}
                animation="fadeInUpBig"

            >
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name='user-o'
                        color='#121212'
                        size={20}
                    />
                    <TextInput
                        placeholder='Your Email'
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => setEmail(val)}
                    />
                    {data.check_textInputChange ?
                        <Animatable.View
                            animation="bounceIn"
                        >

                            <Feather
                                name="check-circle"
                                color="green"
                                size={20}
                            />
                        </Animatable.View>
                        : null}

                </View>
                <Text style={[styles.text_footer, {
                    marginTop: 35

                }]}>Password</Text>
                <View style={styles.action}>
                    <Feather
                        name='lock'
                        color='#121212'
                        size={20}
                    />
                    <TextInput
                        placeholder='Password'
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => setPassword(val)}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ?
                            <Feather
                                name="eye-off"
                                color="grey"
                                size={20}
                            />
                            :
                            <Feather
                                name="eye"
                                color="grey"
                                size={20}
                            />}
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity
                        onPress={processSignIn()}
                    >
                        <LinearGradient
                            colors={['#121212', '#000']}
                            style={styles.signIn}
                        >
                            <Text style={[styles.textSign, {
                                color: '#fff'
                            }]}>Sign In</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUpScreen')}
                        style={[styles.signIn, {
                            borderColor: '#000',
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#000'
                        }]}> Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#121212',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#121212',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});
