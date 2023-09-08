import { useAJAX } from "component/hooks/useAJAX";
import { getVideos } from "config/config";
import React from "react";
import TraillerItem from "./TraillerItem";

const Trailler = ({ movieId }) => {
  const [dataVideo] = useAJAX(getVideos(movieId));
  const videoList = dataVideo?.results || [];
  return (
    <div className="mb-10">
      {videoList.slice(0, 3).map((item) => (
        <TraillerItem key={item.id} item={item}></TraillerItem>
      ))}
    </div>
  );
};

export default Trailler;
