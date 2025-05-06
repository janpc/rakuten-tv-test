import { use } from 'react';
import { Link } from 'react-router-dom';
import { MoviesContainer, Title } from './listStyles';

export default function List({ listPromise }) {
  const { name, movies } = use(listPromise);

  return (
    <>
      <Title>{name}</Title>
      <MoviesContainer>
        {
          movies.map((movie) => (
            <Link to={`/movie/${movie.id}`}>
              <img src={movie.images.artwork} alt={`${movie.title} movie artwork`} />
            </Link>
          ))
        }
      </MoviesContainer>

    </>
  );
}
