import * as SeriesService from "../../../services/series";

export const GET_ALL_SERIES = "GET ALL SERIES";
export const GET_ALL_SERIES_ERROR = "GET ALL SERIES ERROR";

export const fetchSeries = () => async(dispatch) => {
    return SeriesService.getAllSeries()
            .then(series => {
                dispatch({
                    type: GET_ALL_SERIES,
                    payload: {
                        total: series.total,
                        series: series.entries.slice(0, 4)
                    }
                })
            })
            .catch(error => {
                console.error(error);
                dispatch({
                    type: GET_ALL_SERIES_ERROR
                })
            });
}
