// A reducer is a function that returns an object;
// when combine with other reducers, they create the
// global state.
// Thought of as data stores.
/*{
    bookReducer: {} data store
}*/
import uuidV4 from 'uuid/v4'
import { ADD_BOOK, REMOVE_BOOK } from '../actions'

const initialState = {
    books: [{ name: 'East of Eden',
    author: 'John Steinbeck',
    id: uuidV4() }]
}

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOK:
            return {
                books: [...state.books, action.book]
            }
        case REMOVE_BOOK:
            const index = state.books.findIndex(book => book.id === action.book.id)
            return {
                books: [...state.books.slice(0, index), ...state.books.slice(index + 1)]
            }
        default:
            return state
    }
}

export default bookReducer