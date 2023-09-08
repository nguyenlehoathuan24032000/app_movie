import React from "react";
//icon-search
const Icon = ({ className = "", icon }) => {
  return (
    <svg className={className}>
      <use href={`/img/icons.svg#${icon}`}></use>
    </svg>
  );
};

export default Icon;
