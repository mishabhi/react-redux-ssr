import * as MoviesActions from "../actions";

const initialState = {
    movies: [],
    total: 0
}

const moviesReducer = function(state = initialState, action) {
    switch (action.type) {
        case MoviesActions.GET_ALL_MOVIES:
            return {
                ...state,
                movies: action.payload.movies,
                total: action.payload.total
            };

        case MoviesActions.GET_ALL_MOVIES_ERROR:
            return {
                ...state
            };

        default: {
            return state;
        }
    }
};
  
export default moviesReducer;