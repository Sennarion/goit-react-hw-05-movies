import { useState, useEffect, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { api } from 'services/api';
import {
  Wrapper,
  MovieHeader,
  LinkItem,
  Poster,
  MovieInfo,
} from './MovieDetails.styled';
import { Container } from 'components/Container/Container.styled';

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    api
      .getMovieById(movieId)
      .then(setMovie)
      .catch(err => console.log(err));
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const { poster_path, title, overview, vote_average } = movie;
  const genres = movie.genres.map(genre => genre.name).join(', ');
  const rating = vote_average.toFixed(1) * 10 + '%';
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : 'https://dummyimage.com/395x592/000/fff.jpg&text=MOVIE+POSTER+IS+NOT+DEFINED';

  return (
    <Container>
      <Wrapper>
        <Poster src={poster} alt={title} />
        <MovieInfo>
          <MovieHeader>
            <h2>{title}</h2>
            <LinkItem to={backLinkHref}>Go back</LinkItem>
          </MovieHeader>
          <p>Userscore: {rating}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres}</p>
          <Wrapper>
            <LinkItem to="cast" state={{ from: backLinkHref }}>
              Cast
            </LinkItem>
            <LinkItem to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </LinkItem>
          </Wrapper>
        </MovieInfo>
      </Wrapper>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
}

export default MovieDetails;
