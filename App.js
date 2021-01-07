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
// import { createStore } from 'redux'
import { loginSuccess } from './actions/'

// import rootReducer from './reducers/'

// const store = createStore(rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ &&
//   window.__REDUX_DEVTOOLS_EXTENSION__()
// );


const getFonts = () => Font.loadAsync({
  'xanhmono-regular': require('./assets/fonts/XanhMono-Regular.ttf'),
  'xanhmono-italic': require('./assets/fonts/XanhMono-Italic.ttf')
})

const App = (props) => {

  const [fontsLoaded, setFontsLoaded] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [myToken, setMyToken] = useState(null)
  

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
      // loginSuccess(await AsyncStorage.getItem('change me to lainskey'));
      userToken = await AsyncStorage.getItem('MYFINALKEY');

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
          // json.user.bank=5000
          props.loginSuccess(json)

          console.log(props,' 444')
          // console.log(myToken)
          // console.log(store.getState().user.bank)


          // 1st try with store.getState()
          // try with passing function
          // hook context
          // create higher level component
          // thunk

          // i either need to use Hooks and Context, or.... somehow access store. or store.getState()/store.dispatch

          // console.log(store.getState());
          // props.loginSuccess(json);     breaking if i connect
          // console.log(store.getState().token)
      })
      :
      console.log('uhhhhhhhhhhhhhhhhhhhhhhhhhhhh', props.token)
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
        /* could do class */
        // <Provider store={store}>
          <NavigationContainer>


            {
              
              props.token === null ?
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

// (am i missing state to props????)
export default connect(state => ({ token: state.token }), { loginSuccess })(App)