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
        // props.navigation.navigate('Hello World')
        console.log(props.tournaments.data.tournaments.nodes[0].name)

    }

    return (
        <View style={global.container}>

            <Text style={global.titleText}> Tournaments Screen </Text>

            <TouchableOpacity style={global.button} onPress={goBack} >    
                <Text>Go back</Text>
            </TouchableOpacity>

            {
                props.tournaments !== [] || props.tournaments !== null ?
                props.tournaments.data.tournaments.nodes.map(node => {
                    return(
                    <TouchableOpacity style={global.button} onPress={() => handlePress(node.name)} >    
                        <Text>{node.name}</Text>
                    </TouchableOpacity>
                    )
                })
                :
                console.log('tournaments still loading. or an error lol')
            
            }
        </View>
    )
}

export default connect(state => ({ tournaments: state.tournaments, token: state.token }))(Tournaments)