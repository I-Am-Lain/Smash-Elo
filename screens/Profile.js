import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from  'react-native'

import { global } from '../styles/global'

import Leaderboard from 'react-native-leaderboard';

export default function Profile(props) {

    const handlePress = () => {
        props.navigation.goBack()
        // navigation.goBack() will pop one off
        // navigation.popToTop()
    }

    const myData = [
        {userName: 'Lordy', highScore: 52000},
        {userName: 'Lain', highScore: 72000},
        {userName: 'Mew3King', highScore: 6000000},
        {userName: 'TBird', highScore: 19000},
        {userName: 'Hungrboyx', highScore: 1400},
        {userName: 'ElonsYaBoi', highScore: 250391000},
        {userName: 'coolguy87', highScore: 1400},
        {userName: 'manfromcolorado55', highScore: 4853200},
        {userName: 'L0RD_SaMUR4I', highScore: 4853200},
        {userName: 'asdf', highScore: 748200},
        {userName: 'John Mayor IRL', highScore: 4853200},
        {userName: 'Kraftwerk', highScore: 3859000},
        {userName: 'fhqwgads', highScore: 115000000},
        {userName: 'FlatironRoxSox829', highScore: 48532900},
        //...
    ] //can also be an object of objects!: data: {a:{}, b:{}}

    return (
        <Leaderboard 
        data={myData} 
        sortBy='highScore' 
        labelBy='userName'/>
    )
}