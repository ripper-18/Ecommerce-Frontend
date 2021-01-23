import {GET_BOOKS,CURRENT_BOOK,GET_BOOKS2} from './types'
import config from "../config";
import {showloader,hideloader} from './isLoading_actions'

export const getBookbyId = (id) => async(dispatch) => {
    await dispatch(showloader())
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
            dispatch(hideloader())
        })
        .catch((err) => console.log(err));
};
export const getBooksByKeyword = (filters,keyword) => async(dispatch) => {

  
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify(filters);

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };
    //console.log(raw)

    await fetch(config.user + `book/query?keyword=${keyword}`, requestOptions)
        .then((response) => response.json())
        .then((res) => {
            dispatch({
                type: GET_BOOKS,
                payload: res,
            });
       //     console.log(res)
           
        })
        .catch((err) => console.log(err));
     
};


export const getBooksByKeyword2 = (filters,keyword) => async(dispatch) => {

  
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify(filters);

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };
    //console.log(raw)

    await fetch(config.user + `book/query?keyword=${keyword}`, requestOptions)
        .then((response) => response.json())
        .then((res) => {
            dispatch({
                type: GET_BOOKS2,
                payload: res,
            });
        //    console.log(res)
           
        })
        .catch((err) => console.log(err));
     
};