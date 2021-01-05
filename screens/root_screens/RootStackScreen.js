import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'


import SplashScreen from './SplashScreen'
import SignUpScreen from './SignUpScreen'
import SignInScreen from './SignInScreen'


const RootStack = createStackNavigator()


export default RootStackScreen = ({navigation}) => {
    return (
        <RootStack.Navigator headerMode='none'>
            <RootStack.Screen name='SplashScreen' component={SplashScreen} />
            <RootStack.Screen name='SignUpScreen' component={SignUpScreen} />
            <RootStack.Screen name='SignInScreen' component={SignInScreen} />
        </RootStack.Navigator>
    )
}