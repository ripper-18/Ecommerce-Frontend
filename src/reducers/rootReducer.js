import {combineReducers} from 'redux'
import authReducer from './authReducer'
import bookReducer from './bookReducer';
import orderReducer from './orderReducer'
import cartReducer from './cartReducer'
import dialogReducer from './dialogReducer'
import loaderReducer from './loaderReducer'

export default combineReducers({
  
    auth: authReducer,
    order:orderReducer,
    book:bookReducer,
    cart:cartReducer,
    dialog:dialogReducer,
    load: loaderReducer
});