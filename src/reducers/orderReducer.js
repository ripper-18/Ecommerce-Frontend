import { GET_ADDRESS, GET_PAST_ORDERS, SET_CURRENT_ORDER } from "../actions/types";

const initialState = {
    addresses: [],
    pastOrders: [],
    currentOrder: {},
};
// eslint-disable-next-line
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ADDRESS:
            return {
                ...state,
                addresses: action.payload,
            };
        case GET_PAST_ORDERS:
            return {
                ...state,
                pastOrders: action.payload,
            };
        case SET_CURRENT_ORDER:
            return {
                ...state,
                currentOrder: action.payload,
            };

        default:
            return state;
    }
}