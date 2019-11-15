// Global store (state object) by combining reducers

import { combineReducers } from 'redux'
import bookReducer from './bookReducer'

const rootReducer = combineReducers({
    bookReducer
})

export default rootReducer