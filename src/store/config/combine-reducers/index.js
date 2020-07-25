import { combineReducers } from "redux";
import moviesReducer from "../../movies/reducers";
import seriesReducer from "../../series/reducers";

const reducers = combineReducers({
    moviesReducer,
    seriesReducer
});

export default reducers;
