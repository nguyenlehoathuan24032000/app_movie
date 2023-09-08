import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import BannerItem from "./BannerItem";
import { useAJAX } from "component/hooks/useAJAX";
import { getURLGenres, getURLMovie } from "config/config";
import { withErrorBoundary } from "react-error-boundary";
import { ErrorComponent } from "component/comon";

const Banner = () => {
  const [dataMovie] = useAJAX(getURLMovie("upcoming"));
  const [dataGenres] = useAJAX(getURLGenres());

  const genresList = dataGenres?.genres || [];
  const movieList = dataMovie?.results || [];

  return (
    <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-[80px]">
      <Swiper className="h-full">
        {movieList.slice(0, 10).map((item) => (
          <SwiperSlide key={item.id}>
            <BannerItem genresList={genresList} item={item}></BannerItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default withErrorBoundary(Banner, {
  FallbackComponent: ErrorComponent,
});
