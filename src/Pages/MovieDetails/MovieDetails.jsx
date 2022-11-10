import React from 'react';
import { Suspense } from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { NavLink, Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchByID } from 'Api/Api';
import { GrClose } from 'react-icons/gr';

import { Loader } from '../../components/Loader/Loader';
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
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    setLoading(true);
    fetchByID(movieId).then(response => {
      setCurrentMovie(response);
      setLoading(false);
    });
  }, [movieId]);

  if (!currentMovie) {
    return;
  }
  const { title, poster_path, vote_average, tagline, overview, genres } =
    currentMovie;
  return (
    <>
      {loading && <Loader />}{' '}
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
            <NavLink to={backLinkHref}>
              <GrClose className="icon" />
            </NavLink>
          </>
        )}
      </Wrapper>
      <MoreWrapper>
        <MoreTitle>Show more information</MoreTitle>
        <MoreLink to="cast" state={{ from: backLinkHref }}>
          Cast
        </MoreLink>
        <MoreLink to="reviews" state={{ from: backLinkHref }}>
          Reviews
        </MoreLink>
      </MoreWrapper>
      <Suspense>
        <Outlet />
        </Suspense>
    </>
  );
};

MovieDetails.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default MovieDetails;
