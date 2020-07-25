import * as SeriesActions from "../actions";

const initialState = {
    series: [],
    total: 0
}

const seriesReducer = function(state = initialState, action) {
    switch (action.type) {
        case SeriesActions.GET_ALL_SERIES:
            return {
                ...state,
                series: action.payload.series,
                total: action.payload.total
            };

        case SeriesActions.GET_ALL_SERIES_ERROR:
            return {
                ...state
            };

        default: {
            return state;
        }
    }
};
  
export default seriesReducer;