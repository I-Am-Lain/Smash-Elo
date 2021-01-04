import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from  'react-native'

import { global } from '../styles/global'

export default function Home(props) {

    const handlePress = () => {
        props.navigation.navigate('About')
        // navigation.goBack() will pop one off
        // navigation.popToTop()
    }

    return (
        <View style={global.container}>
            <Text style={global.titleText}> Home Screen </Text>
            <TouchableOpacity style={global.button} onPress={handlePress} >
                <Text>Hotdog</Text>
            </TouchableOpacity>
        </View>
    )
}