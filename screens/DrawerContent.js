import React, { useState } from 'react';
import { AsyncStorage, View } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper'

import { global } from '../styles/global'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { logoutUser } from '../actions/'

import { connect } from 'react-redux'


const DrawerContent = (props) => {

    const [darkTheme, setDarkTheme] = useState(false)

    const toggleTheme = () => {
        setDarkTheme(!darkTheme)
    }

    const handlePress = () => {

        alert('Goodbye :) (from DrawerContent)')
        AsyncStorage.removeItem('MYFINALKEY4');

        props.logoutUser();

    }


    
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={global.drawerContent} >

                    <View style={global.userInfoSection} >

                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://www.lordofthefries.com.au/wp-content/uploads/2019/02/chicago.png'
                                }}
                                size={50}
                            />
                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Title style={global.title} >
                                    William Vetter
                                </Title>
                                <Caption style={global.caption}>
                                    Silver Tier Subscriber
                                </Caption>
                            </View>
                        </View>

                        <View style={global.row}>
                            <View style={global.section} >
                                <Paragraph style={[global.paragraph, global.caption]}>
                                    §72,000
                                </Paragraph>

                            </View>
                            <View style={global.section} >
                                <Paragraph style={[global.paragraph, global.caption]}>
                                    
                                </Paragraph>
                                <Caption style={global.caption} >
                                    Reload Unavailable :(
                                </Caption>
                            </View>
                        </View>

                    </View>

                    <Drawer.Section style={global.drawerSection}>
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon name='home-outline' color={color} size={size}/>

                            )}
                            label='Home'
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon name='account-outline' color={color} size={size}/>

                            )}
                            label='Leaderboards'
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon name='nintendo-game-boy' color={color} size={size}/>

                            )}
                            label='Tournaments'
                            onPress={() => {props.navigation.navigate('Tournaments')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon name='eye-settings-outline' color={color} size={size}/>

                            )}
                            label='About'
                            onPress={() => {props.navigation.navigate('About')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon name='one-up' color={color} size={size}/>

                            )}
                            label='Support'
                            onPress={() => {props.navigation.navigate('Support')}}
                        />
                    </Drawer.Section>

                    <Drawer.Section title='Preferences'>
                            <TouchableRipple onPress={toggleTheme}>
                                <View style={global.preference}>
                                    <Text>Dark Theme</Text>
                                    <View pointerEvents='none'>
                                        <Switch value={darkTheme} />
                                    </View>
                                </View>
                            </TouchableRipple>
                    </Drawer.Section>

                    
                </View>
            </DrawerContentScrollView>
            
            
            <Drawer.Section style={global.bottomDrawerSection} >
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon name='exit-to-app' color={color} size={size}/>

                    )}
                    label='Sign Out'
                    onPress={handlePress}
                />
            </Drawer.Section>
        </View>
    )
}

export default connect(null, { logoutUser })(DrawerContent)