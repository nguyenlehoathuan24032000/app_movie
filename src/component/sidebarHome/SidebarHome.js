import axios from "axios";
import { Button, LoadingComponent, TitleH2 } from "component/comon";
import Input from "component/comon/Input";
import { MovieListSub } from "component/homePage";
import WatchList from "component/homePage/WatchList";
import { QuickMovieList } from "component/quickMovie";
import { getURLSearch } from "config/config";
import { debounce } from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateLoading } from "redux-toolkit/movieSlice";

const SidebarHome = () => {
  const [query, setQuery] = useState("");
  const [popularList, setPopularList] = useState([]);
  const isLoading = useSelector((state) => state.movie.isLoading);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearchQuery = debounce(function (value) {
    setQuery(value);
  }, 1000);

  useEffect(() => {
    async function fetchData() {
      dispatch(updateLoading(true));
      try {
        const response = await axios.get(getURLSearch(query));
        if (!response) throw new Error();
        const { results } = response.data;
        setPopularList(results);
        dispatch(updateLoading(false));
      } catch (err) {
        dispatch(updateLoading(true));
      }
    }
    fetchData();
  }, [query]);

  return (
    <div className="w-full max-w-[400px] p-8">
      <div className="quickSearchContainer relative">
        <Input onChange={handleSearchQuery} placeholder="Quick Search"></Input>
        <div className="quickSearchResults absolute invisible opacity-0 top-full w-full h-full min-h-[200px] border border-white rounded-lg bg-black bg-opacity-90 overflow-y-auto">
          {isLoading && (
            <LoadingComponent className="h-[30px] w-[30px] border-[3px] mt-[50px] mx-auto"></LoadingComponent>
          )}
          {!query && (
            <p className="text-center text-xl text-white mt-8">
              Find a movie 😊
            </p>
          )}
          <QuickMovieList list={popularList}></QuickMovieList>
        </div>
      </div>
      <div className="popularMovie mb-10">
        <TitleH2 className="text-3xl">Popular Movie</TitleH2>
        <MovieListSub type="popular"></MovieListSub>
        <Button onClick={() => navigate("./popular")} className="w-full">
          See More
        </Button>
      </div>
      <div className="watchList">
        <TitleH2 className="text-3xl">Favorite List</TitleH2>
        <WatchList></WatchList>
        <Button className="w-full">See More</Button>
      </div>
    </div>
  );
};

export default SidebarHome;
