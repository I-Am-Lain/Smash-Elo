import React from 'react'

import { registerRootComponent } from 'expo'

import { StatusBar } from 'expo-status-bar';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rootReducer from './reducers/'

import App from './App'

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Main = () => {
    return(
        <Provider store={store}>
            <App />
        </Provider>
    )
}

export default registerRootComponent(Main);