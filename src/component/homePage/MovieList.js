import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieItem from "./MovieItem";
import { getURLMovie } from "config/config";
import { useAJAX } from "component/hooks/useAJAX";
import PropTypes from "prop-types"; // ES6
import { withErrorBoundary } from "react-error-boundary";
import { ErrorComponent, LoadingComponent } from "component/comon";
import { useNavigate } from "react-router-dom";
import LayoutSlide from "layout/LayoutSlide";

const MovieList = ({ type = "popular" }) => {
  const [dataMovie, errMovie, loadingMovie] = useAJAX(getURLMovie(type));

  const movieList = dataMovie?.results || [];

  return (
    <Fragment>
      {loadingMovie && (
        <div className="h-[455px] w-[50px] mx-auto">
          <LoadingComponent className="w-[50px] h-[50px] border-[5px]"></LoadingComponent>
        </div>
      )}
      {!loadingMovie && <LayoutSlide list={movieList}></LayoutSlide>}
    </Fragment>
  );
};

MovieList.propTypes = {
  type: PropTypes.string.isRequired,
};

export default withErrorBoundary(MovieList, {
  FallbackComponent: ErrorComponent,
});
