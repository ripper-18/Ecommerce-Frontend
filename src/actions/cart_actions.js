import {ADD_TO_CART,REMOVE_FROM_CART,CLEAR_CART} from './types';
import config from '../config';

export const addToCart = (books) => (dispatch) =>{
    dispatch({
        type:ADD_TO_CART,
        payload:books,
    });

};

export const removeFromCart = (books,index) => (dispatch) =>{
    dispatch({
        type:REMOVE_FROM_CART,
        payload:{books,index},
    });    
}

export const removeFromCart = (books, index) => (dispatch) => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: { books, index },
    });
}

export const clearCart = () => (dispatch) =>{
    dispatch({
        type:CLEAR_CART,
        payload:[],
    });
}
