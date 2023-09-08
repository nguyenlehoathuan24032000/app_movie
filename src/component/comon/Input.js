import Icon from "component/icon/Icon";
import React from "react";

const Input = ({
  placeholder = "Search",
  className = "",
  onChange = () => {},
}) => {
  return (
    <div className="py-3 px-3 rounded-lg flex gap-x-3 mb-10 border border-gray-500">
      <input
        className={`text-gray-400 flex-1 bg-transparent outline-none placeholder:text-text-gray-400 ${className}`}
        type="text"
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      <Icon className="w-5 h-5" icon="icon-search"></Icon>
    </div>
  );
};

export default Input;
