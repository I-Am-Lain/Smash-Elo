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

    //make fake buttons for my tournament pages being displayed
    //those pages need to connect to redux store and grab their appropriate infos

    render(){
        return (
            <View style={global.container}>

                <Text style={[global.titleText, {paddingTop: 20}]}> Upcoming Events </Text>

                <TouchableOpacity style={[global.button, {width: 300, marginTop: 30}]} onPress={() => this.props.navigation.navigate('Bourbon State Gaming: Barrel Bash V')} >    
                    <Text style={{width: 250}}>Bourbon State Gaming: Barrel Bash V</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[global.button, {width: 300, marginTop: 30}]} onPress={() => this.props.navigation.navigate('da steve weely')} >    
                    <Text>da steve weely</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[global.button, {width: 300, marginTop: 30}]} onPress={() => this.props.navigation.navigate('2020 Kelvins Test Tournaments')} >    
                    <Text>2020 Kelvins Test Tournaments</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[global.button, {width: 300, marginTop: 30}]} onPress={() => this.props.navigation.navigate('Hello World')} >    
                    <Text>Hello World</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[global.button, {width: 300, marginTop: 30}]} onPress={() => this.props.navigation.navigate('Lincs Awakening 2: A Smash Regional (Postponed indefinitely due to COVID-19)')} >    
                    <Text>Lincs Awakening 2: A Smash Regional</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[global.button, {width: 300, marginTop: 30}]} onPress={() => this.props.navigation.navigate('GO TO SMASH.GG/SAXU')} >    
                    <Text>GO TO SMASH.GG/SAXU</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[global.button, {width: 300, marginTop: 30}]} onPress={() => this.props.navigation.navigate('Smash Things 2030 (ALL DLC)')} >    
                    <Text>Smash Things 2030 (ALL DLC)</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[global.button, {width: 300, marginTop: 30}]} onPress={() => this.props.navigation.navigate('CEO 2020 Fighting Game Championships')} >    
                    <Text>CEO 2020 Fighting Game Championships</Text>
                </TouchableOpacity>

                {
                    this.props.tournaments !== null || Object.keys(this.state.myTournaments).length !== 0 || this.props.tournaments !== [] ?
                    // this.state.cardTournaments.data.tournaments.nodes.map(node => {
                    //     return(
                    //     <TouchableOpacity style={global.button} onPress={() => handlePress(node.name)} >    
                    //         <Text>{node.name}</Text>
                    //     </TouchableOpacity>
                    //     )
                    // })
                    null
                    // console.log(this.props)
                    :
                    console.log('TOURNAMENTS.JS STILL BROKEN!!!!!!!!!!!!!!!!!!!!!!!!')
                
                } 
            </View>
    )
    }
}

export default connect(state => ({ tournaments: state.tournaments }))(Tournaments)