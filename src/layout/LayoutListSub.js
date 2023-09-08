import { MovieItemSub } from "component/homePage";
import React from "react";

const LayoutListSub = ({ list = [], className = "" }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {list.length > 0 &&
        list
          .slice(0, 3)
          .map((mv) => <MovieItemSub key={mv.id} movie={mv}></MovieItemSub>)}
    </div>
  );
};

export default LayoutListSub;
