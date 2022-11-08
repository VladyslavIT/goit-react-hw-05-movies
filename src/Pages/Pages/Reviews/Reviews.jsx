import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReview } from 'Api/Api';

import { Loader } from '../../../components/Loader/Loader';
import {
  ReviewThumb,
  ReviewTitle,
  ReviewText,
  NotReview,
  ReviewTime,
} from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);
    fetchReview(movieId).then(response => {
      setReviews(response);
      setLoading(false);
    });
  }, [movieId]);

  if (!reviews) {
    return;
  }

  return (
    <>
      {loading && <Loader />}
      {reviews.length > 0 ? (
        <ReviewThumb>
          {reviews.map(({ author, content, created_at, id }) => (
            <li key={id}>
              <ReviewTitle>{author}</ReviewTitle>
              <ReviewText>{content}</ReviewText>
              <ReviewTime>
                {new Date(created_at).toLocaleDateString()}
              </ReviewTime>
            </li>
          ))}
        </ReviewThumb>
      ) : (
        <NotReview>Sorry, there are no reviews yet.</NotReview>
      )}
    </>
  );
};

Reviews.propTypes = {
  movieId: PropTypes.string.isRequired
};

export default Reviews;
