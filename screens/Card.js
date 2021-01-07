import React from 'react'
import { View, Text, TouchableOpacity, TextInput } from  'react-native'

import { global } from '../styles/global'

import { WebView } from 'react-native-webview';


export default function Card(props) {

    const handlePress = () => {
        props.navigation.popToTop()
        // navigation.goBack() will pop one off
        // navigation.popToTop()
    }

    return (
        <View style={global.container}>


            {/* <Text style={global.titleText}> ~Bracket~ </Text> */}


            <TouchableOpacity style={global.button} onPress={handlePress} >
                <Text>Back to Home</Text>
            </TouchableOpacity>


            <View style={global.container}>
                <WebView style={{ width: 275, marginBottom: 0}}
                    scrollEnabled={false}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{ uri: "http://www.twitch.tv/lordyhotdog" }}
                />
            </View>

                        <View style={global.container}>
                <WebView style={{ width: 360}}
                    scrollEnabled={false}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{ uri: "http://www.twitch.tv/lordyhotdog/chat" }}
                />
            </View>
            
            {/* <TextInput placeholder='place your bets...'/> */}

        </View>
    )
}