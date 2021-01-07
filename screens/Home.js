import React from 'react'
import { View, Text, TouchableOpacity } from  'react-native'

import { global } from '../styles/global'

import { connect } from 'react-redux'


const Home = (props) => {

    const handlePress = () => {
        props.navigation.navigate('Bourbon State Gaming: Barrel Bash V')
    }
    
    return (
        <View style={global.container}>
            
            <Text style={global.titleText}> Home </Text>

            <Text style={global.titleText}>Insert Logo Here </Text>

            {/*maybe show animations displaying some marketing info*/}
            

            <TouchableOpacity style={global.button} onPress={handlePress} >
                <Text>to Bourbon</Text>
            </TouchableOpacity>
        
        </View>
    )
}

export default connect()(Home)