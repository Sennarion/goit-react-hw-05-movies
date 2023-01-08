import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from 'services/api';

function Reviews(props) {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    api.getMovieReviews(movieId).then(({ results }) => {
      console.log(results);
      setReviews(results);
    });
  }, [movieId]);

  if (reviews.length === 0) {
    return <p>We don't have any reviews for this movie</p>;
  }

  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <h4>{review.author}</h4>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}

export default Reviews;
