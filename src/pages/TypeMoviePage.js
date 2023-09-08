import axios from "axios";
import { LoadingComponent } from "component/comon";
import { MovieItem } from "component/homePage";
import { getURLMovie, getURLSearch } from "config/config";
import React, { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import {
  updateLoading,
  updatePage,
  updateResults,
} from "redux-toolkit/movieSlice";
const TypeMoviePage = ({ type }) => {
  const page = useSelector((state) => state.movie.search.page);
  const results = useSelector((state) => state.movie.search.results);
  const query = useSelector((state) => state.movie.search.query);
  const isLoading = useSelector((state) => state.movie.isLoading);
  const optionId = useSelector((state) => state.movie.search.optionId);
  const dispatch = useDispatch();

  const handlePageClick = (event) => {
    dispatch(updatePage(event.selected + 1));
  };

  useEffect(() => {
    async function fetchData() {
      dispatch(updateLoading(true));
      try {
        const response = await axios.get(
          query ? getURLSearch(query, page) : getURLMovie(type, page)
        );
        if (!response) throw new Error();
        const { results } = response.data;
        dispatch(updateResults(results));
        dispatch(updateLoading(false));
      } catch (err) {
        dispatch(updateLoading(true));
      }
    }
    fetchData();
  }, [query, dispatch, page, type]);

  useEffect(() => {
    async function fetchData() {
      dispatch(updateLoading(true));
      try {
        const response = await axios.get(getURLMovie(type, page));
        if (!response) throw new Error();
        const { results } = response.data;
        if (!optionId) dispatch(updateResults(results));
        else {
          const newResults = results.filter((rs) =>
            rs.genre_ids.includes(optionId)
          );
          dispatch(updateResults(newResults));
        }
        dispatch(updateLoading(false));
      } catch (err) {
        dispatch(updateLoading(true));
      }
    }
    fetchData();
  }, [optionId, type, page, dispatch]);
  return (
    <>
      {isLoading && <LoadingComponent></LoadingComponent>}
      <div className="popular grid grid-cols-5 gap-5 z-0 ">
        {results.map((item) => (
          <MovieItem key={item.id} movie={item}></MovieItem>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">>"
          onPageChange={handlePageClick}
          pageRangeDisplayed={7}
          pageCount={5}
          previousLabel="<<"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          nextClassName="pagItem"
          previousClassName="pagItem"
          pageClassName="pagItem"
          nextLinkClassName="pagLink"
          previousLinkClassName="pagLink"
          pageLinkClassName="pagLink"
          activeLinkClassName="pagActive"
        />
      </div>
    </>
  );
};

export default TypeMoviePage;
