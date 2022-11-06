import React from "react";
import { Routes, Route } from "react-router-dom";

import { Container } from "./App.styled";

// import { Searchbar } from "../Searchbar/Searchbar";
import { Layout } from "components/Layout/Layout";
import { Home } from "../../Pages/Pages/Home/Home";
import { Movies } from "Pages/Pages/Movies/Movies";
import { MovieDetails } from "Pages/Pages/MovieDetails/MovieDetails";
import { Cast } from "Pages/Pages/Cast/Cast";
import { Reviews } from "Pages/Pages/Reviews/Reviews";
import { NotFound } from "Pages/Pages/NotFound/NotFound";


 const App = () => {
  return (
    <Container>
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
    </Container>
  );
};

export { App };
