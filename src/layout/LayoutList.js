import { TitleH2 } from "component/comon";
import React from "react";

const LayoutList = ({ title = " ", children }) => {
  return (
    <div className="movie-layout mb-10">
      <TitleH2 className="text-3xl">{title}</TitleH2>
      {children}
    </div>
  );
};

export default LayoutList;
