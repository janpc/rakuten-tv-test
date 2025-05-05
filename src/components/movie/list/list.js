import { use } from 'react';
import { Link } from 'react-router-dom';

export default function List({ listPromise }) {
  const { name, movies } = use(listPromise);

  return (
    <>
      <h2>{name}</h2>
      {
        movies.map((movie) => (
          <Link to={`/movie/${movie.id}`}>
            <img src={movie.images.artwork} alt={`${movie.title} movie artwork`} />
          </Link>
        ))
      }
    </>
  );
}
