/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Books from './src/Books'
import rootReducer from './src/reducers'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(rootReducer)

// create the redux store and make it available to all child components
// using Redux and React-Redux helpers
// Provider passes data of some kind along to all child components.
export default class App extends React.Component {
    render() {
        return (
            <Provider
                store={store}>
                <Books />
            </Provider>
        )
    }
}