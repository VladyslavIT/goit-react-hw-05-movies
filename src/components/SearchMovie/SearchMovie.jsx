import React from 'react';
import { NavLink, Outlet } from "react-router-dom";


const SearchMovie = ({ movies }) => {



  return (
    <>
      <h2>Search Film</h2>
      <ul>
        {movies.map(({id, original_title, poster_path}) => (
          <li key={id}><NavLink key={id} to={`${id}`}><img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={`${original_title}`} /></NavLink></li>
        ))}
      </ul>
          <Outlet/>
    </>
  );
};

export { SearchMovie };
