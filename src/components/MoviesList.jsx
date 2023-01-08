import PropTypes from 'prop-types';

import Movie from './Movie';
function MoviesList({ movies }) {
  return (
    <ul>
      {movies.map(({ id, title, name, poster_path }) => {
        const movieName = title || name;
        return (
          <Movie key={id} id={id} title={movieName} poster={poster_path} />
        );
      })}
    </ul>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default MoviesList;
