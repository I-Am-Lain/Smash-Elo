import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity, Dimensions, Platform, TextInput, StatusBar } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'


import * as Animatable from 'react-native-animatable'

export default SignInScreen = (props) => {


    const [login, setLogin] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        showAvailable: false,
        secureTextEntry: true,
        confirmSecureTextEntry: true        
    })

    const textInputChange = (val) => {
        if (val.length === 0) {
            setLogin({
                ...login,
                email: val,
                showAvailable: false
            })
        } 
        else {
            setLogin({
                ...login,
                email: val,
                showAvailable: true
            })
        }
    }

    const handlePasswordChange = (val) => {
        setLogin({
            ...login,
            password: val
        })
    }

    const handleConfirmPasswordChange = (val) => {
        setLogin({
            ...login,
            confirmPassword: val
        })
    }

    const toggleSecureTextEntry = () => {
        setLogin({
            ...login,
            secureTextEntry: !login.secureTextEntry
        })
    }

    const toggleConfirmSecureTextEntry = () => {
    setLogin({
        ...login,
        confirmSecureTextEntry: !login.confirmSecureTextEntry
    })
    }



    return (
        <View style={styles.container}>

            <StatusBar backgroundColor='#009387' barStyle='light-content' />

            <View style={styles.header}>
                <Text style={styles.textHeader}>Welcome</Text>
            </View>



            <Animatable.View style={styles.footer} animation='fadeInUpBig'>


                <Text style={styles.textFooter}>Email</Text>

                <View style={styles.action}>
                    <FontAwesome
                        name='user-o'
                        color='#05375a'
                        size={20}
                    />
                    <TextInput 
                        placeholder='Email'
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={(val) => textInputChange(val)}
                    />

                    {
                        login.showAvailable ? 
                        <Animatable.View animation='bounceIn'>
                            <Feather 
                                name='check-circle'
                                color='green'
                                size={20}
                            />
                        </Animatable.View>
                        :
                        null
                    }
                </View>


                <Text style={[styles.textFooter, {marginTop: 35}]}>Password</Text>

                <View style={styles.action}>
                    <FontAwesome
                        name='lock'
                        color='#05375a'
                        size={20}
                    />
                    <TextInput 
                        placeholder='Password'
                        style={styles.textInput}
                        secureTextEntry={login.secureTextEntry ? true : false}
                        autoCapitalize='none'
                        onChangeText={(val) => handlePasswordChange(val)}
                        
                    />
                    <TouchableOpacity onPress={toggleSecureTextEntry}>
                        {
                            login.secureTextEntry ? 
                            <Feather
                                name='eye-off'
                                color='grey'
                                size={20}
                            />
                            :
                            <Feather
                                name='eye'
                                color='grey'
                                size={20}
                            />
                        }
                    </TouchableOpacity>
                        
                </View>

                <Text style={[styles.textFooter, {marginTop: 35}]}>Confirm Password</Text>

                <View style={styles.action}>
                    <FontAwesome
                        name='lock'
                        color='#05375a'
                        size={20}
                    />
                    <TextInput 
                        placeholder='Confirm Password'
                        style={styles.textInput}
                        secureTextEntry={login.confirmSecureTextEntry ? true : false}
                        autoCapitalize='none'
                        onChangeText={(val) => handleConfirmPasswordChange(val)}
                        
                    />
                    <TouchableOpacity onPress={toggleConfirmSecureTextEntry}>
                        {
                            login.secureTextEntry ? 
                            <Feather
                                name='eye-off'
                                color='grey'
                                size={20}
                            />
                            :
                            <Feather
                                name='eye'
                                color='grey'
                                size={20}
                            />
                        }
                    </TouchableOpacity>
                        
                </View>


                <View style={styles.button}>
                    <TouchableOpacity style={{width: '100%', alignItems: 'center'}}> 
                        <LinearGradient 
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn}
                        >
                            <Text style={[styles.textSign, {color: '#fff'}]}>
                                Sign Up
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity> 

                    <TouchableOpacity 
                        onPress={() => props.navigation.goBack()}
                        style={[styles.signIn, {
                            borderColor: '#009387',
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign, {color: '#009387'}]}>Sign In</Text>
                    </TouchableOpacity>
                </View>

            </Animatable.View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 20,
        paddingHorizontal: 30
    },
    textHeader: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    textFooter: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection:'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a'
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
})