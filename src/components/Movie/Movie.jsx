import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { ListItem, MovieInfo, LinkItem, Title } from './Movie.styled';

function Movie({ id, title, poster }) {
  const location = useLocation();
  return (
    <ListItem>
      <img src={poster} alt={title} />
      <MovieInfo>
        <Title>{title}</Title>
        <LinkItem to={`/movies/${id}`} state={{ from: location }}>
          More info
        </LinkItem>
      </MovieInfo>
    </ListItem>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
