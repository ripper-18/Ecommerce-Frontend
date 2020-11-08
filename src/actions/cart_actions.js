import {ADD_TO_CART,REMOVE_FROM_CART,CLEAR_CART} from './types';
import config from '../config';
import { showDialog } from './dialog_actions';

export const addToCart = (books) => (dispatch) =>{
    //console.log("added to cart")
    dispatch({
        type:ADD_TO_CART,
        payload:books,
    });

};

export const removeFromCart = (books) => (dispatch) =>{
    dispatch({
        type:REMOVE_FROM_CART,
        payload:{books},
    });    
}


export const clearCart = () => (dispatch) =>{
    dispatch({
        type:CLEAR_CART,
        payload:[],
    });
    dispatch(showDialog("Cart was cleared!"))
}
