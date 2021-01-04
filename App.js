import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppLoading from 'expo-app-loading'

import Home from './screens/Home'

import * as Font from 'expo-font'

import Navigator from './routes/homeStack'



const getFonts = () => Font.loadAsync({
  'xanhmono-regular': require('./assets/fonts/XanhMono-Regular.ttf'),
  'xanhmono-italic': require('./assets/fonts/XanhMono-Italic.ttf')
})



export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false)

  if(fontsLoaded){
      return(
        <Navigator />
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


  // return (
  //   <View style={styles.container}>
  //     <Text>Open up THING to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
