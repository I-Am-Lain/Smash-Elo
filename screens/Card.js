import React from 'react'
import { View, Text, TouchableOpacity } from  'react-native'

import { global } from '../styles/global'

import { WebView } from 'react-native-webview';


export default function Card(props) {

    const handlePress = () => {
        props.navigation.goBack()
        // navigation.goBack() will pop one off
        // navigation.popToTop()
    }

    return (
        <View style={global.container}>


            <Text style={global.titleText}> Card Screen </Text>


            <TouchableOpacity style={global.button} onPress={handlePress} >
                <Text>Back to Home</Text>
            </TouchableOpacity>


            <View style={global.container}>
                <WebView style={{ width: 360}}
                    scrollEnabled={false}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{ uri: "http://www.twitch.tv/saltybet" }}
                />
            </View>


        </View>
    )
}