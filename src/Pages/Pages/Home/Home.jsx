import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

import { fetchTrends } from 'Api/Api';
import { Loader } from '../../../components/Loader/Loader';
import { Title, TrendList, TrendItem } from './Home.styled';

const Home = () => {
  const [trendingMovie, setTrendingMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    fetchTrends().then(response => {
      setTrendingMovie(response);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Title>Trending Today</Title>
      {loading && <Loader />}
      <TrendList>
        {trendingMovie.map(({ id, title, poster_path }) => (
          <TrendItem key={id}>
            <NavLink key={id} to={`/movies/${id}`} state={{ from: location }}>
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
export default Home;
