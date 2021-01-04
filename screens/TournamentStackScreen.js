import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import Tournaments from './Tournaments'

import Icon from 'react-native-vector-icons/Ionicons'

const TournamentStack = createStackNavigator()


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
        </TournamentStack.Navigator>
    )
}