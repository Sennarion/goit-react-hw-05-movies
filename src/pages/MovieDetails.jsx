import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { api } from 'services/api';

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [genres, setGenres] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    api.getMovieById(movieId).then(movie => {
      console.log(movie);
      setMovie(movie);
      setGenres(movie.genres.map(genre => genre.name).join(', '));
    });
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const { poster_path, title, overview, vote_average } = movie;

  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
      <h2>{title}</h2>
      <p>Userscore: {vote_average}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genres}</p>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </div>
  );
}

export default MovieDetails;
