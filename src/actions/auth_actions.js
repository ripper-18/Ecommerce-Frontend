import { REGISTER_USER, LOGIN_USER, LOGOUT_USER, UPDATE_USER,FORGOT_PASS } from "./types";
import config from "../config";


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
        console.log(response)
        if (response.message === "Registration Completed" ) {
            dispatch({
                type: REGISTER_USER,
            });
            console.log("Account created")
            history.push("/profile");
            //dispatch(showDialog("Account Created"));
            
        } else {
            console.log(response.message)
            //dispatch(showDialog(response.message));
        }
    }));
    
};

export const loginUser = (user, history) => (dispatch) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    //console.log("Login")
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
            console.log(res);
            if (res.data && res.data.token.length > 1) {
                dispatch({
                    type: LOGIN_USER,
                    payload: res.data,
                });
                history.push("/profile");
            } else {
                console.log("error")
               // dispatch(showDialog("Something went wrong"));
            }
        })
    );
};
export const loginFb = (user, history) => (dispatch) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
        name: user.name,
        email: user.email,
        facebookId: user.id,
    });

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    fetch(config.user + "auth/facebook", requestOptions).then((response) =>
        response.json().then((res) => {
            console.log(res);
            if (res.data && res.data.token.length > 1) {
                dispatch({
                    type: LOGIN_USER,
                    payload: res.data,
                });
                history.push("/profile");
            } else {
                //dispatch(showDialog("Something went wrong"));
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
             console.log(res);
            if (res.data && res.data.token.length > 1) {
                dispatch({
                    type: LOGIN_USER,
                    payload: res.data,
                });
                history.push("/profile");
            } else {
                //dispatch(showDialog("Something went wrong"));
            }
        })
    );
};

export const updateUser = (user, token) => (dispatch) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", token);
  //  myHeaders.append("set-cookie", "httponly;secure;samesite=none")
  console.log("updae_action")
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
            console.log(res);
            
            if (res.data) {
                dispatch({
                    type: UPDATE_USER,
                    payload: res.data,
                });
                
            } else {
               // dispatch(showDialog("Something went wrong"));
            }
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
            console.log(res);
            if (res.data) {
                dispatch({
                    type: FORGOT_PASS
                });
            } else {
               // dispatch(showDialog("Something went wrong"));
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
