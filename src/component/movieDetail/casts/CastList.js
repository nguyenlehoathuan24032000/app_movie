import { TitleH3 } from "component/comon";
import { useAJAX } from "component/hooks/useAJAX";
import { getActors } from "config/config";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import CastItem from "./CastItem";

const CastList = ({ movieId }) => {
  const [dataActors] = useAJAX(getActors(movieId));
  const actorsList = dataActors?.cast || [];
  return (
    <div className="castList">
      <TitleH3 className="text-xl mb-3">Casts</TitleH3>
      <Swiper grabCursor={true} spaceBetween={30} slidesPerView={5}>
        {actorsList.map((item) => (
          <SwiperSlide key={item.id}>
            <CastItem item={item}></CastItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CastList;
