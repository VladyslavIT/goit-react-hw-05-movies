import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Layout = lazy(() => import('../Layout/Layout'));
const Home = lazy(() => import('../../Pages/Home/Home'));
const Movies = lazy(() => import('../../Pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../../Pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../../Pages/Cast/Cast'));
const Reviews = lazy(() => import('../../Pages/Reviews/Reviews'));
const NotFound = lazy(() => import('../../Pages/NotFound/NotFound'));

 const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
  );
};

export { App };
