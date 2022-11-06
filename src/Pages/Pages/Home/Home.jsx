import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { fetchTrends } from 'Api/Api';

import { Title, TrendList, TrendItem } from './Home.styled';

const Home = () => {
  const [trendingMovie, setTrendingMovie] = useState([]);

  useEffect(() => {
    fetchTrends().then(response => setTrendingMovie(response));
  }, []);
  console.log(trendingMovie);
  return (
    <>
      <Title>Trending Today</Title>
      <TrendList>
        {trendingMovie.map(({ id, title, poster_path }) => (
          <TrendItem key={id}>
            <NavLink key={id} to={`/movies/${id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={`${title}`}
              />
            </NavLink>
          </TrendItem>
        ))}
      </TrendList>
      <Outlet />
    </>
  );
};
export { Home };
