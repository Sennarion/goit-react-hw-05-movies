import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { api } from 'services/api';
import MoviesList from 'components/MoviesList/MoviesList';
import { Container } from 'components/Container/Container.styled';
import { Form } from './Movies.styled';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (searchQuery === '') return;

    setQuery(searchQuery);

    api
      .getMovieByName(searchQuery)
      .then(({ results }) => {
        setMovies(results);
      })
      .catch(err => console.log(err));
  }, [searchQuery]);

  function onFormSubmit(e) {
    e.preventDefault();
    setSearchParams(query !== '' ? { query } : {});
  }

  return (
    <Container>
      <Form onSubmit={onFormSubmit}>
        <input
          name="query"
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </Form>
      {movies.length > 0 && <MoviesList movies={movies} />}
    </Container>
  );
}

export default Movies;
