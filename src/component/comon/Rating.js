import React from "react";
import PropType from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "./ErrorComponent";

const Rating = ({ year, rating, className = "" }) => {
  return (
    <div className={`flex justify-between ${className}`}>
      <span>{new Date(year).getFullYear() || 0}</span>
      <div className="flex gap-x-3">
        <span>{rating.toFixed(1) || 0}</span>
      </div>
    </div>
  );
};

Rating.propType = {
  year: PropType.string.isRequired,
  rating: PropType.number.isRequired,
  className: PropType.string,
};

export default withErrorBoundary(Rating, {
  FallbackComponent: ErrorComponent,
});
