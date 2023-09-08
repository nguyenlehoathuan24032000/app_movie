import React from "react";
import PropType from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "./ErrorComponent";

const TitleH3 = ({ children, className = "" }) => {
  return <h3 className={`font-semibold  ${className}`}>{children}</h3>;
};

TitleH3.propType = {
  children: PropType.string.isRequired,
  className: PropType.string,
};

export default withErrorBoundary(TitleH3, {
  FallbackComponent: ErrorComponent,
});
