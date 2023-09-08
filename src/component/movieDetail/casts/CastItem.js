import { Image, TitleH3 } from "component/comon";
import { setImage500 } from "config/config";
import React from "react";

const CastItem = ({ item }) => {
  const { name, profile_path = "" } = item;

  return (
    <div className="h-[220px] select-none">
      <div className="h-[170px] mb-4">
        <Image img={setImage500(profile_path)}></Image>
      </div>
      <TitleH3 className="text-xl">{name}</TitleH3>
    </div>
  );
};

export default CastItem;
