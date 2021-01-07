import React from 'react'
import { View, Text, TouchableOpacity } from  'react-native'

import { global } from '../styles/global'

import { connect } from 'react-redux'


const Home = (props) => {

    const handlePress = () => {
        alert(props.user.username)
        console.log(props.token, props.user.username)
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

export default connect()(Home)