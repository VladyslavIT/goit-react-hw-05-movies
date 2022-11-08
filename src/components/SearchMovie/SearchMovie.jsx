import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

import { SearchTitle, SearchList, SearchItem } from './SearchMovie.styled';

const SearchMovie = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <SearchTitle>Movies found</SearchTitle>
      <SearchList>
        {movies.map(({ id, original_title, poster_path }) => (
          <SearchItem key={id}>
            <NavLink key={id} to={`${id}`} state={{ from: location }}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={`${original_title}`}
              />
            </NavLink>
          </SearchItem>
        ))}
      </SearchList>
      <Outlet />
    </>
  );
};

SearchMovie.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      original_title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired
    })
  )
};

export { SearchMovie };
