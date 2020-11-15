import { SHOW_DIALOG, HIDE_DIALOG } from "../actions/types";

const initialState = {
    isOpen: false,
    msg: "",
};
// eslint-disable-next-line
export default function (state = initialState, action) {
    switch (action.type) {
        case SHOW_DIALOG:
            return {
                ...state,
                isOpen: action.payload.isOpen,
                msg: action.payload.msg,
            };
        case HIDE_DIALOG:
            return {
                ...state,
                isOpen: action.payload.isOpen,
                msg: action.payload.msg,
            };

        default:
            return state;
    }
}
