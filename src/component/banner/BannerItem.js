import { Button, Image, TitleH2 } from "component/comon";
import { GenresItem, GenresList } from "component/genres";
import { setImageOriginal } from "config/config";
import React from "react";
import { Fragment } from "react";
import PropType from "prop-types";
import { useNavigate } from "react-router-dom";

const BannerItem = ({ item = {}, genresList = [] }) => {
  const { backdrop_path, title, id, genre_ids } = item;
  const navigate = useNavigate();

  const resultsGenres = genresList.filter((item) =>
    genre_ids.includes(item.id)
  );
  return (
    <Fragment>
      <div className="absolute inset-0 bg-gradient-to-t to-[rgba(255,255,255,0.07)] from-[rgba(0,0,0,0.5)]"></div>
      <Image img={setImageOriginal(backdrop_path)}></Image>
      <div className="absolute bottom-6 left-6">
        <TitleH2 className="text-3xl">{title}</TitleH2>
        <GenresList className="mb-4">
          {resultsGenres.map((item) => (
            <GenresItem key={item.id}>{item.name}</GenresItem>
          ))}
        </GenresList>
        <Button
          onClick={() => navigate(`./${id}`)}
          className="w-[150px]"
        ></Button>
      </div>
    </Fragment>
  );
};
BannerItem.propType = {
  item: PropType.object.isRequired,
  genresList: PropType.array.isRequired,
};

export default BannerItem;
