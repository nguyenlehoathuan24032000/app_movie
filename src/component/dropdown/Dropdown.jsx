import React from "react";
import useDropdown from "./UseDropdown";
import { useAJAX } from "component/hooks/useAJAX";
import { getURLGenres } from "config/config";
import { useDispatch, useSelector } from "react-redux";
import { updateOption } from "redux-toolkit/movieSlice";

const Dropdown = () => {
  const { show, setShow, nodeRef } = useDropdown();
  const optionId = useSelector((state) => state.movie.search.optionId);
  const [data] = useAJAX(getURLGenres());
  const dispatch = useDispatch();

  const handleSelectDropdownOption = function (optionId) {
    dispatch(updateOption(optionId));
    setShow(false);
  };

  const genresList = data?.genres || [];
  const option = genresList.find((item) => item.id === optionId);
  return (
    <div ref={nodeRef} className="relative w-full max-w-[200px] z-30 ">
      <div
        onClick={() => setShow(!show)}
        className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer"
      >
        {option?.name || "Thể Loại"}
      </div>
      {show && (
        <ul className="absolute top-full left-0 border border-gray-200 bg-black bg-opacity-90 rounded-lg w-full min-h-[400px] h-full overflow-y-auto">
          <li
            key={"123123123123"}
            onClick={(e) => handleSelectDropdownOption()}
            className="p-5 cursor-pointer"
          >
            Thể Loại
          </li>
          {genresList.map((genre) => (
            <li
              key={genre.id}
              onClick={(e) => handleSelectDropdownOption(genre.id)}
              className="p-5 cursor-pointer"
            >
              {genre.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
