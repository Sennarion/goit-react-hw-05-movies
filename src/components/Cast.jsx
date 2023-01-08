import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from 'services/api';
function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    api.getMovieCredits(movieId).then(({ cast }) => {
      console.log(cast);
      setCast(cast);
    });
  }, [movieId]);

  if (!cast) {
    return null;
  }

  return (
    <ul>
      {cast.map(({ id, name, character, profile_path }) => {
        return (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : 'https://dummyimage.com/395x592/000/fff.jpg&text=MOVIE+POSTER+IS+NOT+DEFINED'
              }
              alt={name}
            />
            <h4>{name}</h4>
            <p>{character}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default Cast;
