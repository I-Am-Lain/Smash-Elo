import React from 'react'
import { View, Text, TouchableOpacity } from  'react-native'

import { global } from '../styles/global'

import { connect } from 'react-redux'

import * as Animatable from 'react-native-animatable'


const Home = (props) => {

    const handlePress = () => {
        props.navigation.navigate('Bourbon State Gaming: Barrel Bash V')
    }
    
    return (
        <View style={global.container}>

            <Animatable.Image
                    animation='fadeInUp'
                    duration={2000}
                    style={{marginTop: 50, height: '20%', width: '80%'}}
                source={require('../assets/bracket.png')}
                // styles={styles.logo}
                resizeMode="stretch"
                />

                <Text style={[global.titleText, {paddingTop: 40}]}> Bet on Smash Bros Online </Text>

                <Text style={[global.titleText, {paddingTop: 100, paddingBottom: 45}]}> Monthly Leaderboard and Prizes :D </Text>


            {/*maybe show animations displaying some marketing info*/}
            

            {/* <TouchableOpacity style={global.button} onPress={handlePress} >
                <Text>Let's Go</Text>
            </TouchableOpacity> */}
        
        </View>
    )
}

export default connect()(Home)