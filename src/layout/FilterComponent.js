import Input from "component/comon/Input";
import Dropdown from "component/dropdown/Dropdown";
import { debounce } from "lodash";
import React from "react";
import { useDispatch } from "react-redux";
import { searchResults } from "redux-toolkit/movieSlice";

const FilterComponent = () => {
  const dispatch = useDispatch();

  const handleSeachQuery = debounce(function (value) {
    dispatch(searchResults(value));
  }, 1000);

  return (
    <div className="flex justify-between">
      <Input onChange={handleSeachQuery}></Input>
      <Dropdown></Dropdown>
    </div>
  );
};

export default FilterComponent;
