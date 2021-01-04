import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from  'react-native'

import { global } from '../styles/global'

export default function Tournaments(props) {

    const handlePress = () => {
        props.navigation.goBack()
        // navigation.goBack() will pop one off
        // navigation.popToTop()
    }

    return (
        <View style={global.container}>
            <Text style={global.titleText}> Tournaments Screen </Text>
            <TouchableOpacity style={global.button} onPress={handlePress} >
                <Text>Hotdog</Text>
            </TouchableOpacity>
        </View>
    )
}