import React from "react";
import Header from "./Header";
import FilterComponent from "./FilterComponent";
import { Outlet } from "react-router-dom";

const LayoutMovies = () => {
  return (
    <div className="px-10">
      <Header></Header>
      <FilterComponent></FilterComponent>
      <Outlet></Outlet>
    </div>
  );
};
export default LayoutMovies;

// export default withErrorBoundary(LayoutMovies, {
//   FallbackComponent: ErrorComponent,
// });
