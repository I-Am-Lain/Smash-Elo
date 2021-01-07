import React from 'react'
import { AsyncStorage, StyleSheet, View, Text, TouchableOpacity } from  'react-native'

import { global } from '../styles/global'

import { loginSuccess, logoutUser } from '../actions/'
import { connect } from 'react-redux'

const Home = (props) => {
    // const handlePress = () => {
    //     alert('WE MOVIN')

    //     AsyncStorage.removeItem('MYFINALKEY4');

    //     console.log(props.token);
    //     props.logoutUser();
    //     console.log(props.token);    // DONT TRUST THIS, it's evaluating too soon after the dispatch action
    // }

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

export default connect(state => (state), { logoutUser })(Home)