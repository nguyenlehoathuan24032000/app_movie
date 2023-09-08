import { createSlice } from "@reduxjs/toolkit";
import { perPage } from "config/config";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    isLoading: false,
    movie: {},
    search: {
      type: "",
      query: "",
      optionId: "",
      page: 1,
      results: [],
      itemPerPage: perPage,
    },
    bookmarks: [],
  },
  reducers: {
    searchResults: (state, { payload }) => {
      state.search.query = payload;
    },
    updateMovie: (state, { payload }) => {
      state.movie = payload;
    },
    updatePage: (state, { payload }) => {
      state.search.page = payload;
    },
    updateResults: (state, { payload }) => {
      state.search.results = payload;
    },
    updateLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    updateOption: (state, { payload }) => {
      state.search.optionId = payload;
    },
    updateType: (state, { payload }) => {
      state.search.type = payload;
    },
    updateBookmarks: (state, { payload }) => {
      state.bookmarks = payload;
    },
  },
});
export const {
  searchResults,
  updateMovie,
  updatePage,
  updateResults,
  updateLoading,
  updateOption,
  updateBookmarks,
} = movieSlice.actions;
export default movieSlice.reducer;
