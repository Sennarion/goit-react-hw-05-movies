import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { api } from 'services/api';

function MovieDetails(props) {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    api.getMovieById(movieId).then(movie => {
      console.log(movie);
      setMovie(movie);
      setGenres(movie.genres.map(genre => genre.name).join(', '));
    });
  }, [movieId]);

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <h2>{movie.title}</h2>
      <p>Userscore: {movie.vote_average}</p>
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      <h3>Genres</h3>
      <p>{genres}</p>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </div>
  );
}
MovieDetails.propTypes = {};
export default MovieDetails;
