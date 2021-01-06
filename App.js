import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';

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
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    // confirm if user is logged in or not
    //MAY HAVE TO USE SET TIMEOUT TO ALLOW TIME FOR API TO RETURN CORRECT COMPONENT

    // const token = await AsyncStorage.getItem('babysfirstkey')
    // if (token)
    //    fetch data about user from API
    //    set Redux State with it
    //    take me 2 Home
    // else 
    //    take me 2 login
    
    // !!! apparently don't use async functions in useEffect
    async function fetchCredentials() {
      setLoggedIn(await AsyncStorage.getItem('babysfirstkeyyyy')); // .then similar to async/await
 
    }

    fetchCredentials();
    
    // const readData = async () => {
    //   try {
    //     const userAge = await AsyncStorage.getItem('babysthirdkey').then(setLoggedIn(true))
    
    //     if (userAge !== null) {
    //       console.log('success')
    //     } else {console.log('failure')}
    //   } catch (e) {
    //     alert('Failed to fetch the data from storage')
    //   }

    // }

    // readData()
  }, [])


  if(fontsLoaded){
      return(
        
        <NavigationContainer>



          {

            loggedIn ?
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>

              <Drawer.Screen name='HomeDrawer' component={MainTabScreen} />
              <Drawer.Screen name='Support' component={SupportScreen} />

            </Drawer.Navigator>
            :
            <RootStackScreen />
          }
            
            

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


