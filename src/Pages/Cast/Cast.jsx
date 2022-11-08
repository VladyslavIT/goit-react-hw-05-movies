import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'Api/Api';
import notFound from '../../notFound.png';

import { CastList, CastRole, NotCast } from './Cast.styled';
import { Loader } from '../../components/Loader/Loader';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);
    fetchCast(movieId).then(response => {
      setMovieCast(response);
      setLoading(false);
    });
  }, [movieId]);

  if (!movieCast) {
    return;
  }

  const defaultPhoto = profile_path => {
    if (!profile_path) {
      return `${notFound}`;
    }
    return `https://image.tmdb.org/t/p/w500/${profile_path}`;
  };

  return (
    <>
      {loading && <Loader />}
      {movieCast.length > 0 ? (
        <CastList>
          {movieCast.map(({ id, character, name, profile_path }) => (
            <li key={id}>
              <img
                width={200}
                height={300}
                src={`${defaultPhoto(profile_path)}`}
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

Cast.propTypes = {
  movieId: PropTypes.string.isRequired
}
export default Cast;
