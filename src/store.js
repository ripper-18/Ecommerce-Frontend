 import { createStore, applyMiddleware, compose } from "redux";
 import thunk from "redux-thunk";
 import { persistStore, persistReducer } from "redux-persist";
 import storage from "redux-persist/lib/storage";
 import rootReducer from "./reducers/rootReducer";

 const persistConfig = {
     key: "root",
     storage,
 };

 const persistedReducer = persistReducer(persistConfig, rootReducer);

 const initialState = {};

 const middleware = [thunk];
 const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE ||compose;


 export const store = createStore(
     persistedReducer,
     initialState,
     composeEnhancer(
        applyMiddleware(...middleware)
    )
 );

 export const persistor = persistStore(store);
