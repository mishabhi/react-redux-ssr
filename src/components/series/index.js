import React, { Fragment, useEffect, useState, useContext } from "react";
import Item from "../common/item";
import PageHeaderContext from "../../context";
import { useSelector, useDispatch } from "react-redux";
import * as SeriesActions from "../../store/series/actions";

const Series = () => {

  const {setTitle} = useContext(PageHeaderContext);
  const dispatch = useDispatch();
  const seriesList = useSelector(({seriesReducer}) => seriesReducer.series);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    setTitle("Popular Series");
    dispatch(SeriesActions.fetchSeries());
  }, []);

  useEffect(() => {
    setSeries(seriesList);
  }, [seriesList]);

  return (
    <Fragment>      
      {
        series.map((series) => (
          <Item key={series.title} url={series.images["Poster Art"].url} title={series.title} />
        ))
      }
    </Fragment>
  );
};

export default Series;
