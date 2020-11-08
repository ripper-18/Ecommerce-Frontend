import { SHOW_DIALOG, HIDE_DIALOG } from "./types";

export const showDialog = (msg) => (dispatch) => {
    dispatch({
        type: SHOW_DIALOG,
        payload: {
            isOpen: true,
            msg,
        },
    });
};
export const hideDialog = () => (dispatch) => {
    dispatch({
        type: HIDE_DIALOG,
        payload: {
            isOpen: false,
            msg: "",
        },
    });
};
