import { SHOW_LOADER, HIDE_LOADER } from "./types";

export const showloader = () => (dispatch) => {
    //console.log("show")
    dispatch({
        type: SHOW_LOADER,
        payload: {
            isLoading: true,
        },
    });
};
export const hideloader = () => (dispatch) => {
    //console.log("hide")
    dispatch({
        type: HIDE_LOADER,
        payload: {
            isLoading: false,
        },
    });
};
