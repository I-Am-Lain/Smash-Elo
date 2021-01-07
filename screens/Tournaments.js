import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from  'react-native'

import { global } from '../styles/global'

import Card from './Card'

import { connect } from 'react-redux'



class Tournaments extends React.Component {

    state = {
        cardTournaments: null
    }

    componentDidMount(){
        console.log('===========================================================================')
        this.setState({
            cardTournaments: this.props.tournaments
        })
    }


    handlePress = (name) => {
        this.props.navigation.navigate(name)
        // navigation.goBack() will pop one off
        // navigation.popToTop()
    }

    goBack = () => {
        this.props.navigation.navigate('Bourbon State Gaming: Barrel Bash V')
        // console.log(props)

    }

    render(){
        return (
            <View style={global.container}>

                <Text style={global.titleText}> Tournaments Screen </Text>

                <TouchableOpacity style={global.button} onPress={this.goBack} >    
                    <Text>Go back</Text>
                </TouchableOpacity>

                {
                    this.state.cardTournaments !== null ?
                    // this.state.cardTournaments.data.tournaments.nodes.map(node => {
                    //     return(
                    //     <TouchableOpacity style={global.button} onPress={() => handlePress(node.name)} >    
                    //         <Text>{node.name}</Text>
                    //     </TouchableOpacity>
                    //     )
                    // })
                    console.log('iam truthy')
                    :
                    console.log('TOURNAMENTS.JS STILL BROKEN!!!!!!!!!!!!!!!!!!!!!!!!')
                
                } 
            </View>
    )
    }
}

export default connect(state => ({ tournaments: state.tournaments }))(Tournaments)