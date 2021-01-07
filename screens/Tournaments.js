import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from  'react-native'

import { global } from '../styles/global'

import Card from './Card'

import { connect } from 'react-redux'



const Tournaments = (props) => {


    const handlePress = (name) => {
        props.navigation.navigate(name)
        // navigation.goBack() will pop one off
        // navigation.popToTop()
    }

    const goBack = () => {
        props.navigation.navigate('Bourbon State Gaming: Barrel Bash V')
        // console.log(props)

    }

    return (
        <View style={global.container}>

            <Text style={global.titleText}> Tournaments Screen </Text>

            <TouchableOpacity style={global.button} onPress={goBack} >    
                <Text>Go back</Text>
            </TouchableOpacity>

            {/* {
                Object.keys(props.tournaments).length === 0 ?
                props.tournaments.data.tournaments.nodes.map(node => {
                    return(
                    <TouchableOpacity style={global.button} onPress={() => handlePress(node.name)} >    
                        <Text>{node.name}</Text>
                    </TouchableOpacity>
                    )
                })
                // console.log(props)
                :
                console.log('TOURNAMENTS.JS STILL BROKEN!!!!!!!!!!!!!!!!!!!!!!!!')
            
            }  */}
        </View>
    )
}

export default connect(state => ({ tournaments: state.tournaments, token: state.token }))(Tournaments)