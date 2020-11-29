import { REGISTER_USER, LOGIN_USER, LOGOUT_USER, UPDATE_USER,FORGOT_PASS } from "./types";
import config from "../config";
import {showDialog} from './dialog_actions'
import {showloader,hideloader} from './isLoading_actions'

export const registerUser = (user,history) => (dispatch) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
   

    var raw = JSON.stringify({
        name: user.name,
        email: user.email,
        phone: user.phone,
        password: user.password,
    });

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    fetch(config.user + "auth/signup", requestOptions).then((res) =>res.json().then((response)=> {
        if (response.message === "Registration Completed" ) {
            dispatch({
                type: REGISTER_USER,
            });
            history.push("/profile");
            dispatch(showDialog("Account Created"));
            
        } else {
            dispatch(showDialog(response.message));
        }
    }));
    
};

export const registerSeller = (user, history) => (dispatch) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");


    var raw = JSON.stringify({
        name: user.name,
        email: user.email,
        phone: user.phone,
        password: user.password,
        isStudent:user.isStudent,
        isVendor:user.isVendor
    });

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    fetch(config.user + "auth/signup", requestOptions).then((res) => res.json().then((response) => {
        if (response.message === "Registration Completed") {
            dispatch({
                type: REGISTER_USER,
            });
            history.push("/profile");
            dispatch(showDialog("Seller Account Created"));

        } else {
            dispatch(showDialog(response.message));
        }
    }));

};

export const loginUser = (user, history) => (dispatch) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        cred: user.cred,
        password: user.password,
    });

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    fetch(config.user + "auth/login", requestOptions).then((response) =>
        response.json().then((res) => {
            if (res.data && res.data.token.length > 1) {
                dispatch({
                    type: LOGIN_USER,
                    payload: res.data,
                });
                history.push("/profile");
            } else {
                dispatch(showDialog(`${res.message}`));
            }
        })
    );
};

export const loginGoogle = (user, history) => (dispatch) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
   
    var raw = JSON.stringify({
        name: user.name,
        email: user.email,
        googleId: user.id,
    });

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    fetch(config.user + "auth/google", requestOptions).then((response) =>
        response.json().then((res) => {
            if (res.data && res.data.token.length > 1) {
                dispatch({
                    type: LOGIN_USER,
                    payload: res.data,
                });
                history.push("/profile");
            } else {
                dispatch(showDialog("Something went wrong"));
            }
        })
    );
};

export const updateUser = (user, token) => async(dispatch) => {

    await dispatch(showloader())
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", token);

    var raw = JSON.stringify({
        email:user.email,
        phone: user.phone,
        name:user.name,
    });

    var requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    fetch(config.user + "auth/update", requestOptions).then((response) =>
        response.json().then((res) => {
            if (res.data) {
                dispatch({
                    type: UPDATE_USER,
                    payload: res.data,
                });
                dispatch(showDialog("Information got updated!"))
            } else {
                dispatch(showDialog("Something went wrong"));
            }
            dispatch(hideloader())
        })
    );
};

export const forgotPassword =(user,history)=>(dispatch)=>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        email: user.email
    });

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    fetch(config.user + "auth/recover", requestOptions).then((response) =>
        response.json().then((res) => {
            
            if (res.data) {
                dispatch({
                    type: FORGOT_PASS
                });
                dispatch(showDialog("Your password was changed!"))
            } else {
                dispatch(showDialog("Something went wrong"));
            }
        })
    );

}

export const logoutUser = (history) => (dispatch) => {
    dispatch({
        type: LOGOUT_USER,
    });
    history.push("/login");
};
