import React from "react";
import { NavLink } from "react-router-dom";
import { withErrorBoundary } from "react-error-boundary";
import { ErrorComponent } from "component/comon";

const menu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Movies",
    path: "/movies",
  },
  {
    id: 3,
    title: "TV Series",
    path: "/tvseries",
  },
];

const Header = () => {
  return (
    <div className="flex gap-x-5 py-5">
      {menu.map((item) => (
        <NavLink
          className="menuItem text-gray-400  font-medium"
          key={item.id}
          to={item.path}
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );
};

export default withErrorBoundary(Header, {
  FallbackComponent: ErrorComponent,
});
