import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import About from './About'

import Icon from 'react-native-vector-icons/Ionicons'

const AboutStack = createStackNavigator()


export default AboutStackScreen = ({navigation}) => {
    return (
        <AboutStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#d02860'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <AboutStack.Screen name='About' component={About} options={{
                title: 'About Lordy Hotdogs!!!!',
                headerLeft: () => (
                    <Icon.Button name='ios-menu' size={25}
                    backgroundColor='#d02860' onPress={() => navigation.openDrawer()}></Icon.Button>
                )
            }} />
        </AboutStack.Navigator>
    )
}