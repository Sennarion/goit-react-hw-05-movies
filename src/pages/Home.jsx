import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { api } from 'services/api';
import MoviesList from 'components/MoviesList';

function Home(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.getTrendingMovies().then(res => setMovies(res.results));
  }, []);

  return <MoviesList movies={movies} />;
}
Home.propTypes = {};
export default Home;
