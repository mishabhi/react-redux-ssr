import * as reduxModule from "redux";
import { applyMiddleware, compose, createStore } from "redux";
import combineReducers from "./combine-reducers";
import thunk from "redux-thunk";

/*
Fix for Firefox redux dev tools extension
https://github.com/zalmoxisus/redux-devtools-instrument/pull/19#issuecomment-400637274
 */
reduxModule.__DO_NOT_USE__ActionTypes.REPLACE = "@@redux/INIT";

export default function configureStore(preloadedState = {}, config) {
    //const composeEnhancers = config.IS_BROWSER ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
    let composeEnhancers;
     
    if(config.IS_BROWSER){
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    } else{
        composeEnhancers = compose;
    }
    const enhancer = composeEnhancers(applyMiddleware(thunk));
    const store = createStore(combineReducers, preloadedState, enhancer);
    return store;
}
