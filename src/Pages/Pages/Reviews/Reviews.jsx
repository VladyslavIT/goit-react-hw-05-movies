import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReview } from 'Api/Api';

import {
    ReviewThumb,
  ReviewTitle,
  ReviewText,
  NotReview,
  ReviewTime,
} from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchReview(movieId).then(response => setReviews(response));
  }, [movieId]);

  if (!reviews) {
    return;
  }

  return (
    <>
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

export { Reviews };
