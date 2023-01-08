import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ id, title, poster }) {
  return (
    <li>
      <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt={title} />
      <h2>{title}</h2>
      <Link to={`/movies/${id}`}>More info</Link>
    </li>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
