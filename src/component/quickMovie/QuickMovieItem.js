import { Rating, TitleH3 } from "component/comon";
import { setImage500 } from "config/config";
import React from "react";
import { useNavigate } from "react-router-dom";

const QuickMovieItem = ({ item }) => {
  const { poster_path, title, id, vote_average, release_date } = item;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`./${id}`)}
      className="flex items-center gap-x-4  p-4 cursor-pointer hover:bg-slate-50 hover:bg-opacity-25"
    >
      <div className="flex-shrink-0 h-[50px] w-[50px]">
        <img
          className="h-full w-full object-cover"
          src={setImage500(poster_path)}
          alt=""
        />
      </div>
      <div className="flex-1">
        <TitleH3 className="text-sm mb-3">{title}</TitleH3>
        <Rating
          className="text-xs"
          year={new Date(release_date).getFullYear()}
          rating={vote_average}
        ></Rating>
      </div>
    </div>
  );
};

export default QuickMovieItem;
