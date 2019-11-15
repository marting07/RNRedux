// Actions to add data to Redux store.
// Functions that return objects that
// send data to the store and update reducers
// They are the only way to change the store.
// Each action should contain a type property
// in order for reducers to be able to use them.
export const ADD_BOOK = 'ADD_BOOK'
export const REMOVE_BOOK = 'REMOVE_BOOK'
import uuidV4 from 'uuid/v4'

export function addBook (book) {
    return {
        type: ADD_BOOK,
        book
    }
}

export function removeBook (book) {
    return {
        type: REMOVE_BOOK,
        book
    }
}