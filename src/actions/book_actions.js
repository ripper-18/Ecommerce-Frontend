import {GET_BOOKS,CURRENT_BOOK} from './types'
import config from "../config";

export const getBookbyId = (id) => (dispatch) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    

    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
    };


    fetch(config.user + `book/${id}` , requestOptions)
        .then((response) => response.json())
        .then((res) => {
            dispatch({
                type: CURRENT_BOOK,
                payload: res,
            });
        })
        .catch((err) => console.log(err));
};
export const getBooksByKeyword = (filters,keyword) => (dispatch) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify(filters);

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    fetch(config.user + `book/query?keyword=${keyword}`, requestOptions)
        .then((response) => response.json())
        .then((res) => {
            dispatch({
                type: GET_BOOKS,
                payload: res,
            });
        })
        .catch((err) => console.log(err));
};


