import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppLoading from 'expo-app-loading'


import * as Font from 'expo-font'


import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator()



import MainTabScreen from './screens/MainTabScreen'
import DrawerContent from './screens/DrawerContent'


import SupportScreen from './screens/SupportScreen'

import RootStackScreen from './screens/root_screens/RootStackScreen'


const getFonts = () => Font.loadAsync({
  'xanhmono-regular': require('./assets/fonts/XanhMono-Regular.ttf'),
  'xanhmono-italic': require('./assets/fonts/XanhMono-Italic.ttf')
})

export default App = () => {

  const [fontsLoaded, setFontsLoaded] = useState(false)

  if(fontsLoaded){
      return(

        <NavigationContainer>
          <RootStackScreen />
          {/* <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>

            <Drawer.Screen name='HomeDrawer' component={MainTabScreen} />
            <Drawer.Screen name='Support' component={SupportScreen} />

          </Drawer.Navigator> */}
        </NavigationContainer>
      )
  } else {
      return(
        <AppLoading
          startAsync={getFonts}
          onFinish={() => setFontsLoaded(true)}
          onError={console.log('we got an error boss')}
        />
      )
  }


}


