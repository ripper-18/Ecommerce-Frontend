import { GET_ADDRESS, GET_PAST_ORDERS, SET_CURRENT_ORDER } from "./types";

import config from "../config";


export const addAddress = (address, token) => (dispatch) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        phone: address.phone,
        lat: address.lat,
        lng: address.long,
        state: address.state,
        address:
            address.delivery1 +
            " " +
            address.delivery2 +
            " " +
            address.city +
            " " +
            address.postcode,
        floor: address.floor,
        instructions: address.instructions,
        lankmark: address.landmark,
    });

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    fetch(config.user + "address/", requestOptions)
        .then((response) => {
            if (response.status === 200) {
                //dispatch(showDialog("Address Added"));

                // dispatch(showDialog("Address Added"));
                // window.location.reload();
                console.log("adress added")
            } else {
                //dispatch(
                  //  showDialog(
                    //    "Address could not be added, check your input and try again"
                    //)
                
            }
        })
        .catch((err) => console.log(err));
};

export const getAddress = (token) => (dispatch) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
    };

    fetch(config.user + "address/", requestOptions)
        .then((response) => response.json())
        .then((res) => {
             console.log(res);
            dispatch({
                type: GET_ADDRESS,
                payload: res,
            });
        });
};

export const removeAddress = (id, token) => (dispatch) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    var requestOptions = {
        method: "DELETE",
        headers: myHeaders,
        redirect: "follow",
    };
    console.log(id)
    

    fetch(config.user + "address/" + id, requestOptions).then((response) => {
        if (response.status === 200) {
            console.log(response)
            //dispatch(showDialog("Address Removed"));
            // dispatch(showDialog("Address Removed"));
            // window.location.reload();
            console.log("address removed")
        } else {
            /*dispatch(
                showDialog("Address could not be removed, Something went wrong")
            );*/
        }
    });
};

export const editAddress = (id, addr, token) => (dispatch) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(addr);

    var requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    fetch(config.user + "address/" + id, requestOptions)
        .then((response) => {
            console.log(response)
            if (response.status === 200) {
                //dispatch(showDialog("Address Updated"));
                // showDialog("Address Updated");
                console.log("address updated")
                // window.location.reload();
            } else {
                /*dispatch(
                    showDialog(
                        "Address could not be updated, check your input and try again"
                    )
                );*/
            }
        })
        .catch((err) => console.log(err));
};

export const setCurrentOrder = (
    address,
    originalBill,
    coupon,
    dishes,
    discountedBill,
    finalAmount,
    delivery,
    gst
) => (dispatch) => {
    dispatch({
        type: SET_CURRENT_ORDER,
        payload: {
            address,
            dishes,
            coupon,
            originalBill,
            discountedBill,
            finalAmount,
            delivery,
            gst
        },
    });
};

export const placeDirectOrder = (
    address,
    mode,
    dishes,
    coupon,
    token,
    originalBill,
    discountedBill,
    finalAmount,
    delivery,
    gst
) => (dispatch) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");
    console.log(originalBill)
    
    
    var raw = JSON.stringify({
        orderType: "normal",
        paymentMode: mode,
        address: address,
        originalBill: originalBill,
        dishes: [...dishes],
        discountedBill: discountedBill,
        finalAmount: finalAmount,
        deliveryCharge:delivery,
        gstCharge:gst
        
    });

    console.log(JSON.parse(raw))
    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    return fetch(config.user + "order", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
            return result;
        })
        .catch((error) => {
            console.log(error);
           /* dispatch(
                showDialog("Something went wrong while placing the order")
            );*/
        });
};

export const getPastOrders = (token) => (dispatch) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
    };

    fetch(config.user + "order", requestOptions)
        .then((response) => response.json())
        .then((res) => {
             console.log(res);
             
            dispatch({
                type: GET_PAST_ORDERS,
                payload: res,
            });
        });
};
