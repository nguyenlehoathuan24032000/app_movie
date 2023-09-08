import React, { useRef, useState } from "react";
import useDropdown from "./UseDropdown";
import ReactDOM from "react-dom";

const DropdownPortal = () => {
  const { show, setShow, nodeRef } = useDropdown();
  const [coords, setCoords] = useState({});
  const handleClick = function (e) {
    setCoords(nodeRef.current?.getBoundingClientRect());
    setShow(!show);
  };
  return (
    <div ref={nodeRef} className="relative w-full max-w-[500px]">
      <div
        onClick={handleClick}
        className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer"
      >
        Selected
      </div>
      {show && <DropdownList coords={coords}></DropdownList>}
    </div>
  );
};

const DropdownList = function ({ coords }) {
  if (typeof document === "undefined") return null;
  return ReactDOM.createPortal(
    <ul
      style={{
        top: coords.top + coords.height,
        left: coords.left,
      }}
      className={`absolute border border-gray-200 rounded-lg w-[${coords.width}px]`}
    >
      <li className="p-5 cursor-pointer">Javascript</li>
      <li className="p-5 cursor-pointer">ReactJS</li>
      <li className="p-5 cursor-pointer">Node</li>
    </ul>,
    document.querySelector("body")
  );
};

export default DropdownPortal;
