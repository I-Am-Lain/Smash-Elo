import React, { useState } from 'react';
import { View } from 'react-native';
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


export default DrawerContent = (props) => {

    const [darkTheme, setDarkTheme] = useState(false)

    const toggleTheme = () => {
        setDarkTheme(!darkTheme)
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
                                    @I-Am-Lain
                                </Caption>
                            </View>
                        </View>

                        <View style={global.row}>
                            <View style={global.section} >
                                <Paragraph style={[global.paragraph, global.caption]}>
                                    80
                                </Paragraph>
                                <Caption style={global.caption} >
                                    Following
                                </Caption>
                            </View>
                            <View style={global.section} >
                                <Paragraph style={[global.paragraph, global.caption]}>
                                    100
                                </Paragraph>
                                <Caption style={global.caption} >
                                    Following
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
                            label='Profile'
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon name='alarm-note' color={color} size={size}/>

                            )}
                            label='Tournaments'
                            onPress={() => {props.navigation.navigate('Tournaments')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon name='eye-settings-outline' color={color} size={size}/>

                            )}
                            label='Settings'
                            onPress={() => {props.navigation.navigate('About')}}
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
                    onPress={() => {}}
                />
            </Drawer.Section>
        </View>
    )
}