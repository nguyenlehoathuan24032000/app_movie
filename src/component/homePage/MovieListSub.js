import { LoadingComponent } from "component/comon";
import React, { Fragment } from "react";
import MovieItemSub from "./MovieItemSub";
import { useAJAX } from "component/hooks/useAJAX";
import { getURLMovie } from "config/config";
import LayoutListSub from "layout/LayoutListSub";

const MovieListSub = ({ type = "popular" }) => {
  const [dataMovie, errMovie, loadingMovie] = useAJAX(getURLMovie(type));

  const movieList = dataMovie?.results || [];

  return (
    <Fragment>
      {loadingMovie && <LoadingComponent></LoadingComponent>}
      {!loadingMovie && (
        <LayoutListSub
          list={movieList}
          className="gap-y-4 mb-5"
        ></LayoutListSub>
      )}
    </Fragment>
  );
};

export default MovieListSub;
