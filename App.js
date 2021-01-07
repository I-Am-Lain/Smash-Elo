// import { StatusBar } from 'expo-status-bar';
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


import { Provider, connect } from 'react-redux'

import { loginSuccess } from './actions/'


// import { createStore } from 'redux'

// import rootReducer from './reducers/'

// const store = createStore(rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ &&
//   window.__REDUX_DEVTOOLS_EXTENSION__()
// );

//kinda wanna REMOVE THIS
const getFonts = () => Font.loadAsync({
  'xanhmono-regular': require('./assets/fonts/XanhMono-Regular.ttf'),
  'xanhmono-italic': require('./assets/fonts/XanhMono-Italic.ttf')
})

const App = (props) => {

  const [fontsLoaded, setFontsLoaded] = useState(false)
  // const [myToken, setMyToken] = useState(null)
  

  useEffect(() => {
    
    // !!! apparently don't use async functions in useEffect
    async function fetchCredentials() {
  
      userToken = await AsyncStorage.getItem('MYFINALKEY4');

      userToken !== null ?
      fetch('http://192.168.1.11:4000/api/v1/auth/1', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userToken}`
        }
    })
      .then(resp => resp.json())
      .then(json => {
          console.log(json);
          console.log(props)
          console.log('yesss');
          // setMyToken(json.token)
          props.loginSuccess(json)

          console.log(props,' 444')


          // thunk????????????????????????????????????????
      })
      :
      console.log('uhhhhhhhhhhhhhhhhhhhhhhhhhhhh', props.token)
    }

    fetchCredentials();
  }, [])


  if(fontsLoaded){
      return(

        // <Provider store={store}>
          <NavigationContainer>


            {
              
              props.token === null || Object.keys(props.token).length === 0 ?
              <RootStackScreen />
              :
              <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>

                <Drawer.Screen name='HomeDrawer' component={MainTabScreen} />
                <Drawer.Screen name='Support' component={SupportScreen} />

              </Drawer.Navigator>
            }
              
              

          </NavigationContainer>
        // </Provider>
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

export default connect(state => ({ token: state.token }), { loginSuccess })(App)