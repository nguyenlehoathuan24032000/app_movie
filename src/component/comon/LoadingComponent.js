import React from "react";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "./ErrorComponent";
import PropType from "prop-types";

const LoadingComponent = ({ className = "" }) => {
  return (
    <div
      className={`${className} rounded-full  border-white border-t-transparent animate-spin`}
    ></div>
  );
};

LoadingComponent.propType = {
  className: PropType.string,
};

export default withErrorBoundary(LoadingComponent, {
  FallbackComponent: ErrorComponent,
});
