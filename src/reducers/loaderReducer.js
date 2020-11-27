import { SHOW_LOADER, HIDE_LOADER } from "../actions/types";

const initialState = {
    isLoading:false
};
// eslint-disable-next-line
export default function (state = initialState, action) {
    switch (action.type) {
        case SHOW_LOADER:
            return {
                ...state,
                isLoading: action.payload.isLoading,
               
            };
        case HIDE_LOADER:
            return {
                ...state,
                isLoading: action.payload.isLoading,
            };

        default:
            return state;
    }
}
