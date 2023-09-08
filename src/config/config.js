export const perPage = 20;
const API_KEY = "8a26ed48a243f9ff88d8fb6164bf89af";
const tmdbEndpoint = "https://api.themoviedb.org/3/movie";
const tmdbEndpointSearch = "https://api.themoviedb.org/3/search/movie";

export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const getURLMovie = function (type, page = 1) {
  return `${tmdbEndpoint}/${type}?api_key=${API_KEY}&page=${page}`;
};

export const getURLSearch = function (query, page = 1) {
  return `${tmdbEndpointSearch}?api_key=${API_KEY}&page=${page}&query=${query}`;
};

export const getURLGenres = function () {
  return `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
};

export const getURLDetail = function (movieId) {
  return `${tmdbEndpoint}/${movieId}?api_key=${API_KEY}`;
};

export const getURLRecommend = function (movieId) {
  return `${tmdbEndpoint}/${movieId}/recommendations?api_key=${API_KEY}
  `;
};

export const getActors = function (movieId) {
  return `${tmdbEndpoint}/${movieId}/credits?api_key=${API_KEY}`;
};

export const getVideos = function (movieId) {
  return `${tmdbEndpoint}/${movieId}/videos?api_key=${API_KEY}`;
};

export const setImageOriginal = function (img) {
  return `https://image.tmdb.org/t/p/original${img}`;
};

export const setImage500 = function (img) {
  return `https://image.tmdb.org/t/p/w500${img}`;
};
