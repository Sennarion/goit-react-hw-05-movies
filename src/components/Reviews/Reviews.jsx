import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from 'services/api';
import { ListItem } from './Reviews.styled';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    api
      .getMovieReviews(movieId)
      .then(({ results }) => {
        setReviews(results);
      })
      .catch(err => console.log(err));
  }, [movieId]);

  if (reviews.length === 0) {
    return <p>We don't have any reviews for this movie</p>;
  }

  return (
    <ul>
      {reviews.map(review => (
        <ListItem key={review.id}>
          <h4>{review.author}</h4>
          <p>{review.content}</p>
        </ListItem>
      ))}
    </ul>
  );
}

export default Reviews;
