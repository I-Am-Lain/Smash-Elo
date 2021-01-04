import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import Profile from './Profile'

import Icon from 'react-native-vector-icons/Ionicons'

const ProfileStack = createStackNavigator()


export default ProfileStackScreen = ({navigation}) => {
    return (
        <ProfileStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#694fad'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <ProfileStack.Screen name='Profile' component={Profile} options={{
                title: 'Profile',
                headerLeft: () => (
                    <Icon.Button name='ios-menu' size={25}
                    backgroundColor='#694fad' onPress={() => navigation.openDrawer()}></Icon.Button>
                )
            }} />
        </ProfileStack.Navigator>
    )
}