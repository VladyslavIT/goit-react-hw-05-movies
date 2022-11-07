import React from 'react';
import { NavLink, Outlet } from "react-router-dom";

import { SearchTitle,SearchList, SearchItem  } from './SearchMovie.styled';


const SearchMovie = ({ movies }) => {



  return (
    <>
      <SearchTitle>Movies found</SearchTitle>
      <SearchList>
        {movies.map(({id, original_title, poster_path}) => (
          <SearchItem key={id}><NavLink key={id} to={`${id}`}><img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={`${original_title}`} /></NavLink></SearchItem>
        ))}
      </SearchList>
          <Outlet/>
    </>
  );
};

export { SearchMovie };
