import { TitleH2 } from "component/comon";
import React from "react";

const TraillerItem = ({ item, children }) => {
  const { key } = item;
  return (
    <div className="h-[500px] w-[1000px] mx-auto aspect-video">
      <TitleH2 className="text-2xl">{children}</TitleH2>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${key || ""}`}
        title="abc"
        className="w-full h-full object-cover"
      ></iframe>
    </div>
  );
};

export default TraillerItem;
