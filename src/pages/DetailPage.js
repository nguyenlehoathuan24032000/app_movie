import Trailler from "component/Trailler/Trailler";
import { Image, TitleH2, TitleH3 } from "component/comon";
import { GenresItem, GenresList } from "component/genres";
import { useAJAX } from "component/hooks/useAJAX";
import Icon from "component/icon/Icon";
import { CastList } from "component/movieDetail/casts";
import RecommendList from "component/movieDetail/recommend/RecommendList";
import { getURLDetail, setImage500 } from "config/config";
import LayoutList from "layout/LayoutList";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateBookmarks, updateMovie } from "redux-toolkit/movieSlice";

const DetailPage = () => {
  const stateInit = useSelector((state) => state.movie);
  const { movieId } = useParams();
  const [data] = useAJAX(getURLDetail(movieId));
  const dispatch = useDispatch();

  const addBookmark = (movie) => {
    // add bookmark
    dispatch(updateBookmarks([...stateInit.bookmarks, movie]));
    // mark current recipe as bookmark để lưu trạng thái bookmarked
    if (movie.id === stateInit.movie.id)
      dispatch(updateMovie({ ...data, isBookmarked: true }));
  };

  const deleteBookmark = (movieId) => {
    // findIndex sẽ return về index nếu thỏa.
    const newBookmarks = stateInit.bookmarks.filter(
      (bookmark) => bookmark.id !== movieId
    );
    // delete bookmark
    dispatch(updateBookmarks(newBookmarks));
    // mark current movie as NOT bookmark để lưu trạng thái bookmarked
    if (movieId === stateInit.movie.id)
      dispatch(updateMovie({ ...data, isBookmarked: false }));
  };

  const handleBookmark = function (movie) {
    if (!stateInit.movie.isBookmarked) {
      //1. Add bookmark
      addBookmark(movie);
    } else {
      //2. remove bookmark
      deleteBookmark(movie.id);
    }
  };

  const handleCheckBookmark = function (data) {
    return stateInit.bookmarks.includes(data);
  };

  useEffect(() => {
    if (!data) return;
    async function fetchData() {
      dispatch(updateMovie({ ...data, isBookmarked: false }));
    }
    fetchData();
  }, [data]);

  if (!data) return;
  const { poster_path, title, overview, runtime } = data;
  return (
    <Fragment>
      <div className="flex items-center gap-x-10 pb-10">
        <div className="flex-shrink-0 h-[300px] w-[300px]">
          <Image img={setImage500(poster_path)}></Image>
        </div>
        <div className="w-[calc(100%-300px-40px)]">
          <div className="flex items-center justify-between">
            <TitleH2 className="text-2xl">{title}</TitleH2>
            <div
              onClick={() => handleBookmark(data)}
              className="bookmark cursor-pointer"
            >
              <Icon
                className="w-6 h-6 bookmark"
                icon={`${
                  handleCheckBookmark(data)
                    ? "icon-bookmark-fill"
                    : "icon-bookmark"
                }`}
              ></Icon>
            </div>
          </div>

          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-x-4">
              <span className="text-gray-400 italic">Thể Loại: </span>
              <GenresList>
                {data.genres.map((genre) => (
                  <GenresItem key={genre.id}>{genre.name}</GenresItem>
                ))}
              </GenresList>
            </div>
            <div className="flex items-center gap-x-4">
              <span className="text-gray-400 italic">Thời lượng:</span>
              <span className="text-white not-italic">{runtime} phút</span>
            </div>
          </div>
          <TitleH3 className="text-xl mb-3">Overview</TitleH3>
          <p className="line-clamp-3 mb-5">{overview}</p>
          <CastList movieId={movieId}></CastList>
        </div>
      </div>
      <Trailler movieId={movieId}></Trailler>
      {/* <LayoutList title="Recommened">
        <RecommendList></RecommendList>
      </LayoutList> */}
    </Fragment>
  );
};

export default DetailPage;
