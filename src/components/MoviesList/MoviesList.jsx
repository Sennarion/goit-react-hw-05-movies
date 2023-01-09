import PropTypes from 'prop-types';
import { List } from './MovieList.styled';
import Movie from '../Movie/Movie';

function MoviesList({ movies }) {
  return (
    <List>
      {movies.map(({ id, title, name, poster_path }) => {
        const movieName = title || name;
        const poster = poster_path
          ? `https://image.tmdb.org/t/p/w500/${poster_path}`
          : 'https://dummyimage.com/395x592/000/fff.jpg&text=MOVIE+POSTER+IS+NOT+DEFINED';
        return <Movie key={id} id={id} title={movieName} poster={poster} />;
      })}
    </List>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
      poster_path: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default MoviesList;
