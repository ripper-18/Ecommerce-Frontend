import {combineReducers} from 'redux'
import authReducer from './authReducer'
import bookReducer from './bookReducer';
import orderReducer from './orderReducer'
import cartReducer from './cartReducer'

export default combineReducers({
  
    auth: authReducer,
    order:orderReducer,
    book:bookReducer,
    cart:cartReducer
});