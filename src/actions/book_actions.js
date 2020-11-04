import {GET_BOOKS} from './types'
import config from "../config";

export const getBooks = (filters) => (dispatch) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify(filters);

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };
    //console.log(filters)

    fetch(config.user + "book/query", requestOptions)
        .then((response) => response.json())
        .then((res) => {
            dispatch({
                type: GET_BOOKS,
                payload: res,
            });
            //console.log(res)
        })
        .catch((err) => console.log(err));
};



