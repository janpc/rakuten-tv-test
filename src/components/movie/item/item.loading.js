import { EmptyItem, MovieLink } from './item.styles';

export default function MovieLoadingListItem() {
  return (
    <MovieLink disabled>
      <EmptyItem />
    </MovieLink>
  );
}
