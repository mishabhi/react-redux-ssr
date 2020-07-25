import * as MoviesService from "../../../services/movies";

export const GET_ALL_MOVIES = "GET ALL MOVIES";
export const GET_ALL_MOVIES_ERROR = "GET ALL MOVIES ERROR";

export const fetchMovies = () => async(dispatch) => {
    return MoviesService.getAllMovies()
            .then(movies => {
                dispatch({
                    type: GET_ALL_MOVIES,
                    payload: {
                        total: movies.total,
                        movies: movies.entries.slice(0, 4)
                    }
                })
            })
            .catch(error => {
                console.error(error);
                dispatch({
                    type: GET_ALL_MOVIES_ERROR
                })
            });
}
