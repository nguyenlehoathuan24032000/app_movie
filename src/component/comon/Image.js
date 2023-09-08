import React from "react";
import PropType from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "./ErrorComponent";

const Image = ({ img }) => {
  return (
    <img src={img} className={`h-full w-full object-cover rounded-lg`} alt="" />
  );
};

Image.propType = {
  img: PropType.string.isRequired,
};

export default withErrorBoundary(Image, {
  FallbackComponent: ErrorComponent,
});
