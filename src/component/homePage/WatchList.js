import React from "react";
import MovieItemSub from "./MovieItemSub";
import { useSelector } from "react-redux";

const WatchList = () => {
  const bookmarks = useSelector((state) => state.movie.bookmarks);
  return (
    <div className="flex flex-col gap-y-4 mb-5">
      {bookmarks.map((mv) => (
        <MovieItemSub key={mv.id} movie={mv}></MovieItemSub>
      ))}
    </div>
  );
};

export default WatchList;
