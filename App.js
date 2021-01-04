import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppLoading from 'expo-app-loading'


import * as Font from 'expo-font'

// import Navigator from './routes/homeStack'

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator()



import MainTabScreen from './screens/MainTabScreen'


const getFonts = () => Font.loadAsync({
  'xanhmono-regular': require('./assets/fonts/XanhMono-Regular.ttf'),
  'xanhmono-italic': require('./assets/fonts/XanhMono-Italic.ttf')
})

export default App = () => {

  const [fontsLoaded, setFontsLoaded] = useState(false)

  if(fontsLoaded){
      return(
        // <Navigator />
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name='Home' component={MainTabScreen}/>
            {/* <Drawer.Screen name="Home" component={HomeStackScreen} />
            <Drawer.Screen name="About" component={AboutStackScreen} /> */}
          </Drawer.Navigator>
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


