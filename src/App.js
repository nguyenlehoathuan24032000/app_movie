import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "swiper/css";
import LayoutHome from "layout/LayoutHome";

const DetailPage = lazy(() => import("pages/DetailPage"));
const TypeMoviePage = lazy(() => import("pages/TypeMoviePage"));
const LayoutMovies = lazy(() => import("layout/LayoutMovies"));

function App() {
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route Component={LayoutHome}>
          <Route path="/" Component={HomePage}></Route>
          <Route path="/:movieId" Component={DetailPage}></Route>
        </Route>
        <Route Component={LayoutMovies}>
          <Route
            path="/movies"
            element={<TypeMoviePage type="upcoming"></TypeMoviePage>}
          ></Route>
          <Route
            path="/tvseries"
            element={<TypeMoviePage type="tvseries"></TypeMoviePage>}
          ></Route>
          <Route
            path="/popular"
            element={<TypeMoviePage type="popular"></TypeMoviePage>}
          ></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
