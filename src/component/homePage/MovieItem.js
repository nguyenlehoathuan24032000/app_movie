import { Button, Image, Rating, TitleH3 } from "component/comon";
import { setImage500, setImageOriginal } from "config/config";
import React from "react";
import { useNavigate } from "react-router-dom";

const MovieItem = ({ movie }) => {
  const {
    id,
    poster_path,
    original_title: title,
    vote_average: vote,
    release_date,
  } = movie;
  const navigate = useNavigate();

  return (
    <div className="movieItem relative p-3 overflow-hidden  rounded-lg h-full">
      <div className="absolute inset-0 z-0 blur-xl ">
        <Image img={`${setImageOriginal(poster_path)}`}></Image>
      </div>
      <div className="h-full relative z-10  flex flex-col">
        <div className="flex-shrink-0 w-full h-[250px] mb-5">
          <Image img={setImage500(poster_path)} className="mb-5"></Image>
        </div>
        <div className="flex-1 flex flex-col">
          <TitleH3 className="flex-1  tracking-wide text-xl mb-4">
            {title}
          </TitleH3>
          <Rating className="mb-4" year={release_date} rating={vote}></Rating>
          <Button onClick={() => navigate(`/${id}`)} className="w-full">
            Watch now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
