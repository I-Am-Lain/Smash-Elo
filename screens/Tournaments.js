import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from  'react-native'

import { global } from '../styles/global'

import Card from './Card'



export default function Tournaments(props) {


    const handlePress = (name) => {
        props.navigation.navigate(name)
        // navigation.goBack() will pop one off
        // navigation.popToTop()
    }

    const goBack = () => {
        props.navigation.navigate('Hello World')
        // console.log(screenProps)
    }

    return (
        <View style={global.container}>

            <Text style={global.titleText}> Tournaments Screen </Text>

            <TouchableOpacity style={global.button} onPress={goBack} >    
                <Text>{props.currentTournaments ? props.currentTournaments[0] : 'Go back'}</Text>
            </TouchableOpacity>

            {
                props.currentTournaments ?
                props.currentTournaments.map(name => {
                    console.log(name)
                    return(
                    <TouchableOpacity style={global.button} onPress={() => handlePress(name)} >    
                        <Text>Go to {name}</Text>
                    </TouchableOpacity>
                    )
                })
                :
                console.log('no tourneys yet')
            
            }
        </View>
    )
}