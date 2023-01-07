import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
function MoviesList({ movies }) {
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <h2>{movie.title}</h2>
            <Link to={`/movies/${movie.id}`}>More info</Link>
          </li>
        );
      })}
    </ul>
  );
}
MoviesList.propTypes = {};
export default MoviesList;
