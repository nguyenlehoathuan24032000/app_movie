import React from "react";
import PropType from "prop-types";
import ErrorComponent from "./ErrorComponent";
import { withErrorBoundary } from "react-error-boundary";

const TitleH2 = ({ children, className = "" }) => {
  return <h2 className={`mb-5 font-bold ${className}`}>{children}</h2>;
};

TitleH2.propType = {
  children: PropType.string.isRequired,
  className: PropType.string,
};

export default withErrorBoundary(TitleH2, {
  FallbackComponent: ErrorComponent,
});
