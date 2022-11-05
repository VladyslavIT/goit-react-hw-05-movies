import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, Outlet } from "react-router-dom";

import { fetchTrends } from 'Api/Api';

const Home = () => {
  const [trendingMovie, setTrendingMovie] = useState([]);

  useEffect(() => {
      fetchTrends().then(response =>
          
          setTrendingMovie(response));
  }, []);
  console.log(trendingMovie);
    return (
        <>
            <h1>Trending Today</h1>
    <ul>
      {trendingMovie.map(({id, title, poster_path}) => (
        <li key={id}><NavLink key={id} to={`/movies/${id}`}><img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={`${title}`} /></NavLink></li>
      ))}
        </ul>
        <Outlet/>
            </>
  );
};
export { Home };
