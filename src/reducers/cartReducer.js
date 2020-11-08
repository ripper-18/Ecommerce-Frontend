import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART,
    
} from "../actions/types";

const initialState = {
    bookCart: [],
};

const removeItem = (arr, item) => {
    if (arr.length <= 1) {
        return [];
    } else {
        let temp = [...arr];
        //console.log(item)
        //console.log("to be removed")
        //console.log(item)
        
        
        
          let  idx = arr.findIndex((it)=>{
              //console.log(it._id)
              //console.log(item.books._id)
              return it._id===item.books._id
          });
        
       // console.log(idx)
        const rem = temp.splice(idx, 1);
        //console.log("final")
        //console.log(temp)
        //console.log("removed")
      //  console.log(rem)
        return temp;
    }
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                bookCart: [...state.bookCart, action.payload],
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                bookCart: removeItem(state.bookCart, action.payload),
            };
        case CLEAR_CART:
            return {
                ...state,
                bookCart: action.payload,
            };
        
        default:
            return state;
    }
}