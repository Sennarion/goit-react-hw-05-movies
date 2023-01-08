import PropTypes from 'prop-types';
import { List } from './MovieList.styled';
import { Container } from 'components/Container/Container.styled';

import Movie from '../Movie/Movie';
function MoviesList({ movies }) {
  return (
    <Container>
      <List>
        {movies.map(({ id, title, name, poster_path }) => {
          const movieName = title || name;
          return (
            <Movie key={id} id={id} title={movieName} poster={poster_path} />
          );
        })}
      </List>
    </Container>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default MoviesList;
