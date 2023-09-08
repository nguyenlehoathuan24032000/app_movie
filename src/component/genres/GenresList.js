import React from "react";
import PropType from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import { ErrorComponent } from "component/comon";

const GenresList = ({ children, className }) => {
  return <div className={`flex gap-x-3 ${className}`}>{children}</div>;
};

GenresList.propType = {
  children: PropType.node.isRequired,
  className: PropType.string,
};

export default withErrorBoundary(GenresList, {
  FallbackComponent: ErrorComponent,
});
