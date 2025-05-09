import {
  LoadingTitle,
  MoviesContainer,
  Wrapper,
} from './list.styles';
import MovieLoadingListItem from '../item/item.loading';

export default function LoadingList() {
  return (
    <Wrapper>
      <LoadingTitle />
      <MoviesContainer $translate={0}>
        {
          [...Array(9).keys()].map((i) => (
            <MovieLoadingListItem key={i} />
          ))
        }
      </MoviesContainer>

    </Wrapper>
  );
}
