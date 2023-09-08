import axios from "axios";
import { Rating, TitleH3 } from "component/comon";
import { getURLSearch, setImage500 } from "config/config";
import React, { Fragment, useEffect, useState } from "react";
import QuickMovieItem from "./QuickMovieItem";

const QuickMovieList = ({ list = [] }) => {
  return (
    <Fragment>
      {list.length > 0 &&
        list.map((item) => (
          <QuickMovieItem key={item.id} item={item}></QuickMovieItem>
        ))}
    </Fragment>
  );
};

export default QuickMovieList;
