import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from  'react-native'

import { global } from '../styles/global'

import Card from './Card'

const myArray = ['foo', 'bar', 'bas']


export default function Tournaments(props) {


    const handlePress = (name) => {
        props.navigation.navigate(name)
        // navigation.goBack() will pop one off
        // navigation.popToTop()
    }

    return (
        <View style={global.container}>

            <Text style={global.titleText}> Tournaments Screen </Text>

            <TouchableOpacity style={global.button} onPress={handlePress} >    
                <Text>Go back</Text>
            </TouchableOpacity>

            {
                myArray.map(name => {
                    console.log(name)
                    return(
                    <TouchableOpacity style={global.button} onPress={() => handlePress(name)} >    
                        <Text>Go to {name}</Text>
                    </TouchableOpacity>
                    )
                })
            
            }
        </View>
    )
}