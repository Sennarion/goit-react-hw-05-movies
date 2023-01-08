import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { api } from 'services/api';
import { Container } from 'components/Container/Container.styled';
import { Form } from './Movies.styled';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (query === '') return;

    api.getMovieByName(query).then(({ results }) => {
      console.log(results);
      setMovies(results);
    });
  }, [query]);

  function onFormSubmit(e) {
    e.preventDefault();
    const query = e.target.elements.query.value;
    setSearchParams(query !== '' ? { query } : {});
    e.target.reset();
  }

  return (
    <Container>
      <Form onSubmit={onFormSubmit}>
        <input name="query" type="text" />
        <button type="submit">Search</button>
      </Form>
      {movies.length > 0 && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}

export default Movies;
