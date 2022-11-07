import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'Api/Api';

import { CastList, CastRole, NotCast } from './Cast.styled';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchCast(movieId).then(response => setMovieCast(response));
  }, [movieId]);

  if (!movieCast) {
    return;
  }

  return (
    <>
      {movieCast.length > 0 ? (
        <CastList>
          {movieCast.map(({ id, character, name, profile_path }) => (
            <li key={id}>
              <img
                width={200}
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={`${name}`}
              />
              <h3>{name}</h3>
              <p>
                as<CastRole>{character}</CastRole>
              </p>
            </li>
          ))}
        </CastList>
      ) : (
        <NotCast>
          Sorry, we didn't find any information about this movie.
        </NotCast>
      )}
    </>
  );
};

export { Cast };
