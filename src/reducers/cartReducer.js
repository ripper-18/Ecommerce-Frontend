import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART,
    SET_DISCOUNT,

} from "../actions/types";

const initialState = {
    bookCart: [],
    discount: 0
};

const removeItem = (arr, item) => {
    if (arr.length <= 1) {
        return [];
    } else {
        let temp = [...arr];
        let idx = arr.findIndex((it) => {
            return it._id === item.books._id
        });

        const rem = temp.splice(idx, 1);
        return temp;
    }
};
// eslint-disable-next-line
export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                bookCart: [...state.bookCart, action.payload],
                discount: 0
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                bookCart: removeItem(state.bookCart, action.payload),
                discount: 0
            };
        case CLEAR_CART:
            return {
                ...state,
                bookCart: action.payload,
                discount: 0
            };

        case SET_DISCOUNT:
            return {
                ...state,
                discount: action.payload,
            }

        default:
            return state;
    }
}