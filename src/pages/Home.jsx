import { useState, useEffect } from 'react';
import { api } from 'services/api';
import MoviesList from 'components/MoviesList';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.getTrendingMovies().then(res => setMovies(res.results));
  }, []);

  console.log(movies);

  return <MoviesList movies={movies} />;
}

export default Home;
