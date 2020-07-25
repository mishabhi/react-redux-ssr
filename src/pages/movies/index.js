import React, { Fragment, useEffect, useContext } from "react";
import Item from "../../components/common/item";
import PageHeaderContext from "../../context";
import * as MoviesActions from "../../store/movies/actions";
import { useSelector } from "react-redux";

function Movies(){

  const {setTitle} = useContext(PageHeaderContext);
  const movies = useSelector(state => state.moviesReducer.movies)

  useEffect(() => {
    setTitle("Popular Movies");
  }, []);

  return (
    <Fragment>      
      {
        movies.map((movie) => (
          <Item key={movie.title} url={movie.images["Poster Art"].url} title={movie.title} />
        ))
      }
    </Fragment>
  );
};

Movies.getInitialStates = (store) => {
  let moviesActions = []
  moviesActions.push(store.dispatch(MoviesActions.fetchMovies()));
  return Promise.all(moviesActions)
}

export default Movies;
