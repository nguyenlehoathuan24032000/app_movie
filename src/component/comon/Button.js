import React from "react";
import PropType from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "./ErrorComponent";
// PropType
const Button = ({ className = "", children = "Watch", onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-primary text-white font-semibold py-3  rounded-lg ${className}`}
    >
      {children}
    </button>
  );
};

Button.propType = {
  className: PropType.string,
  children: PropType.string,
};

export default withErrorBoundary(Button, {
  FallbackComponent: ErrorComponent,
});
