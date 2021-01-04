import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from  'react-native'

import { global } from '../styles/global'

export default function Profile(props) {

    const handlePress = () => {
        props.navigation.goBack()
        // navigation.goBack() will pop one off
        // navigation.popToTop()
    }

    return (
        <View style={global.container}>
            <Text style={global.titleText}> Profile Screen </Text>
            <TouchableOpacity style={global.button} onPress={handlePress} >
                <Text>Back to Home</Text>
            </TouchableOpacity>
        </View>
    )
}