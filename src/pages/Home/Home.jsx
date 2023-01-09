import { useState, useEffect } from 'react';
import { api } from 'services/api';
import MoviesList from 'components/MoviesList/MoviesList';
import { Container } from 'components/Container/Container.styled';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api
      .getTrendingMovies()
      .then(({ results }) => setMovies(results))
      .catch(err => console.log(err));
  }, []);

  return (
    <Container>
      <MoviesList movies={movies} />
    </Container>
  );
}

export default Home;
