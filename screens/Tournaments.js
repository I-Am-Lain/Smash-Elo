import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from  'react-native'

import { global } from '../styles/global'

import Card from './Card'



export default function Tournaments(props) {

    const [names, setNames] = useState(['foo', 'bar', 'bas'])
    

    const handlePress = (name) => {
        props.navigation.navigate(name)
        // navigation.goBack() will pop one off
        // navigation.popToTop()
    }

    const deleteCard = () => {
        setNames(['foo', 'bar'])
        console.log(names)
    }

    return (
        <View style={global.container}>

            <Text style={global.titleText}> Tournaments Screen </Text>

            <TouchableOpacity style={global.button} onPress={deleteCard} >    
                <Text>Go back</Text>
            </TouchableOpacity>

            {
                names.map(name => {
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