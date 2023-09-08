import { ErrorComponent } from "component/comon";
import React from "react";
import { withErrorBoundary } from "react-error-boundary";
import PropType from "prop-types";

const GenresItem = ({ children }) => {
  return (
    <span className="border border-gray-50 p-2 rounded-lg">{children}</span>
  );
};

GenresItem.propType = {
  children: PropType.node.isRequired,
};

export default withErrorBoundary(GenresItem, {
  FallbackComponent: ErrorComponent,
});
