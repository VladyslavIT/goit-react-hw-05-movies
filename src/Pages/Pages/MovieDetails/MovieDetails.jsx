import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { fetchByID } from 'Api/Api';

import {
  Wrapper,
  InfoThumb,
  InfoTitle,
  InfoTag,
  InfoVote,
  InfoListThumb,
  InfoList,
  InfoGenres,
  InfoItem,
  OwerviewTitle,
  OwerviewText,
  MoreWrapper,
  MoreTitle,
  MoreLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [currentMovie, setCurrentMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchByID(movieId).then(response => setCurrentMovie(response));
  }, [movieId]);

  if (!currentMovie) {
    return;
  }

  const { title, poster_path, vote_average, tagline, overview, genres } =
    currentMovie;
  return (
    <>
      {' '}
      <Wrapper>
        {currentMovie && (
          <>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={`${title}`}
              />
            </div>

            <InfoThumb>
              <InfoTitle>{title}</InfoTitle>
              <InfoTag>{tagline}</InfoTag>
              <InfoVote>
                <span>User Score:</span> {`${vote_average.toFixed(1)}`}
              </InfoVote>
              <InfoListThumb>
                <InfoGenres>Genres:</InfoGenres>
                <InfoList>
                  {genres.map(({ id, name }) => (
                    <InfoItem key={id}>{name}</InfoItem>
                  ))}
                </InfoList>
              </InfoListThumb>
              <OwerviewTitle>Overwiew</OwerviewTitle>
              <OwerviewText>{overview}</OwerviewText>
            </InfoThumb>
            <NavLink to='/'>BACK</NavLink>
          </>
        )}
      </Wrapper>
      <MoreWrapper>
        <MoreTitle>Show more information</MoreTitle>
        <MoreLink to="cast">Cast</MoreLink>
        <MoreLink to="reviews">Reviews</MoreLink>
      </MoreWrapper>
      <Outlet />
    </>
  );
};

export { MovieDetails };
