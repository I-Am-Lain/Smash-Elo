import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from  'react-native'

import { global } from '../styles/global'

import { loginSuccess } from '../actions/'
import { connect } from 'react-redux'

const Home = (props) => {

    const handlePress = () => {
        alert('WE MOVIN')
        // props.navigation.navigate('About')
        // navigation.goBack() will pop one off
        // navigation.popToTop()
        console.log(props.token)
        props.loginSuccess({user: 'hello', token: null})
        console.log(props.token)
        
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

export default connect(state => ({ token: state.token }), {loginSuccess})(Home)