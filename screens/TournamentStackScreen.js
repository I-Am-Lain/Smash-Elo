import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import Tournaments from './Tournaments'

import Icon from 'react-native-vector-icons/Ionicons'

const TournamentStack = createStackNavigator()

import Card from './Card'

const myArray = ['foo', 'bar', 'bas']

export default TournamentStackScreen = ({navigation}) => {
    return (
        <TournamentStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#1f65ff'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>



            <TournamentStack.Screen name='Tournaments' component={Tournaments} options={{
                title: 'Tournaments',
                headerLeft: () => (
                    <Icon.Button name='ios-menu' size={25}
                    backgroundColor='#1f65ff' onPress={() => navigation.openDrawer()}></Icon.Button>
                )
            }} />



            {
                myArray.map(title => {
                    return <TournamentStack.Screen name={title} component={Card} options={{
                        title: title,
                        headerLeft: () => (
                            <Icon.Button name='ios-menu' size={25}
                            backgroundColor='#1f65ff' onPress={() => navigation.openDrawer()}></Icon.Button>
                        )
                    }} />
                })
            }



        </TournamentStack.Navigator>
    )
}