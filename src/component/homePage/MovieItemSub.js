import { Image, Rating, TitleH3 } from "component/comon";
import { setImage500 } from "config/config";
import React from "react";
import { useNavigate } from "react-router-dom";

const MovieItemSub = ({ movie }) => {
  const { id, poster_path, title, vote_average, release_date } = movie;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/${id}`)}
      className="p-3 bg-gray-500 flex gap-x-4 items-center rounded-xl cursor-pointer"
    >
      <div className="w-[60px] h-[60px] flex-shrink-0">
        <Image img={setImage500(poster_path)}></Image>
      </div>
      <div className="flex-1">
        <TitleH3 className="mb-2">{title}</TitleH3>
        <Rating
          className="text-xs mb-3"
          year={release_date}
          rating={vote_average}
        ></Rating>
      </div>
    </div>
  );
};

export default MovieItemSub;
