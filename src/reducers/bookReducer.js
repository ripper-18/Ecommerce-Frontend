import { CURRENT_BOOK, GET_BOOKS,GET_BOOKS2 } from "../actions/types";

const initialState = {
    books: [],
    currentBook:{},
    suggestBooks:[]
};
// eslint-disable-next-line
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_BOOKS:
            return {
                ...state,
                books: action.payload,
            };
            case GET_BOOKS2:
            return {
                ...state,
                suggestBooks: action.payload,
            };
        case CURRENT_BOOK:
            return {
                ...state,
                currentBook:action.payload
            }
        
        default:
            return state;
    }
}
