import { LOGIN_USER, LOGOUT_USER, UPDATE_USER } from "../actions/types";

const initialState = {
    oldUser: false,
    isAuth: false,
    user: {},
    token: "",
};

export default  function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                isAuth: true,
                oldUser: action.payload.oldUser || false,
                user: action.payload.user,
                token: action.payload.token,
            };
        case LOGOUT_USER:
            return {
                ...state,
                isAuth: false,
                user: {},
                token: "",
            };
        case UPDATE_USER:
            return {
                ...state,
                oldUser: true,
                user: action.payload.user,
            };

        default:
            return state;
    }
}
