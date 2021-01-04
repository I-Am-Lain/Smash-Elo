import React from 'react'

import HomeStackScreen from './HomeStackScreen'
import AboutStackScreen from './AboutStackScreen'
import TournamentStackScreen from './TournamentStackScreen';
import ProfileStackScreen from './ProfileStackScreen';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'


const Tab = createMaterialBottomTabNavigator()


export default MainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
    >
        <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
            tabBarLabel: 'Home',
            tabBarColor: '#009387',
            tabBarIcon: ({ color }) => (
                <Icon name="ios-home" color={color} size={26} />
            ),
            }}
        />
        <Tab.Screen
            name="Tournaments"
            component={TournamentStackScreen}
            options={{
            tabBarLabel: 'Tournaments',
            tabBarColor: '#1f65ff',
            tabBarIcon: ({ color }) => (
                <Icon name="ios-aperture" color={color} size={26} />
            ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={ProfileStackScreen}
            options={{
            tabBarLabel: 'Profile',
            tabBarColor: '#694fad',
            
            tabBarIcon: ({ color }) => (
                <Icon name="ios-profile" color={color} size={26} />
            ),
            }}
        />
        <Tab.Screen
            name="About"
            component={AboutStackScreen}
            options={{
            tabBarLabel: 'About',
            tabBarColor: '#d02860',            
            tabBarIcon: ({ color }) => (
                <Icon name="ios-notifications" color={color} size={26} />
            ),
            }}
        />
    </Tab.Navigator>

)