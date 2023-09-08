import { MovieItem } from "component/homePage";
import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
const LayoutSlide = ({ list = [], space = 40, perView = 4 }) => {
  return (
    <Fragment>
      <Swiper grabCursor={true} spaceBetween={space} slidesPerView={perView}>
        {list.slice(0, 10).map((rcm) => (
          <SwiperSlide key={rcm.id}>
            <MovieItem movie={rcm}></MovieItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </Fragment>
  );
};

export default LayoutSlide;
