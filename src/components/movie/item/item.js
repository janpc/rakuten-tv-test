import { ArtWork, MovieLink } from './item.styles';

export default function MovieListItem({ movie }) {
  return (
    <MovieLink to={`/movie/${movie.id}`}>
      <ArtWork src={movie.images.artwork} alt={`${movie.title} movie artwork`} />
    </MovieLink>
  );
}
