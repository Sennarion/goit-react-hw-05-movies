import { useState, useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { api } from 'services/api';
import { Wrapper, MovieHeader, LinkItem } from './MovieDetails.styled';
import { Container } from 'components/Container/Container.styled';

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    api.getMovieById(movieId).then(movie => {
      setMovie(movie);
    });
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const { poster_path, title, overview, vote_average } = movie;
  const genres = movie.genres.map(genre => genre.name).join(', ');

  return (
    <Container>
      <Wrapper>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        />
        <div>
          <MovieHeader>
            <h2>{title}</h2>
            <LinkItem to={backLinkHref}>Go back</LinkItem>
          </MovieHeader>
          <p>Userscore: {vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres}</p>
          <Wrapper>
            <LinkItem to="cast">Cast</LinkItem>
            <LinkItem to="reviews">Reviews</LinkItem>
          </Wrapper>
        </div>
      </Wrapper>
      <Outlet />
    </Container>
  );
}

export default MovieDetails;
