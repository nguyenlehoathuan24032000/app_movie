import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import SidebarHome from "component/sidebarHome/SidebarHome";

const LayoutHome = () => {
  return (
    <div className="flex">
      <div className="max-w-[calc(100%-400px)] w-full bg-[#232323] px-10 ">
        <Header></Header>
        <Outlet></Outlet>
      </div>
      <SidebarHome></SidebarHome>
    </div>
  );
};

export default LayoutHome;
