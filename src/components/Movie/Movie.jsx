import PropTypes from 'prop-types';
import { ListItem, MovieInfo, LinkItem, Title } from './Movie.styled';

function Movie({ id, title, poster }) {
  return (
    <ListItem>
      <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt={title} />
      <MovieInfo>
        <Title>{title}</Title>
        <LinkItem to={`/movies/${id}`}>More info</LinkItem>
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
