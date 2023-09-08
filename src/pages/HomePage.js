import React, { Fragment } from "react";
import { withErrorBoundary } from "react-error-boundary";
import { ErrorComponent } from "component/comon";
import { MovieList } from "component/homePage";
import Banner from "component/banner/Banner";
import LayoutList from "layout/LayoutList";

const HomePage = () => {
  return (
    <Fragment>
      <Banner></Banner>
      <LayoutList title="Now Playing">
        <MovieList type="now_playing"></MovieList>
      </LayoutList>
      <LayoutList title="Top Rared">
        <MovieList type="top_rated"></MovieList>
      </LayoutList>
    </Fragment>
  );
};

export default withErrorBoundary(HomePage, {
  FallbackComponent: ErrorComponent,
});
