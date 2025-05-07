import { use, useRef, useState } from 'react';
import { MoviesContainer, Title, Wrapper } from './listStyles';
import MovieListItem from '../item/item';

export default function List({ listPromise }) {
  const { name, movies } = use(listPromise);
  const [scrollPosition, setScrollPosition] = useState(0);
  const moviesContainerRef = useRef();

  function scrollListLeft() {
    let x = scrollPosition - (window.innerWidth - (64 * 2));
    const totalWidth = moviesContainerRef.current.getBoundingClientRect().width;
    const maxScroll = -totalWidth + (window.innerWidth - (64 * 2));

    if (x < maxScroll) {
      x = maxScroll;
    }

    setScrollPosition(x);
  }

  function scrollListRight() {
    let x = scrollPosition + window.innerWidth - (64 * 2);

    if (x > 0) {
      x = 0;
    }

    setScrollPosition(x);
  }

  return (
    <Wrapper>
      <Title>{name}</Title>
      <button type="button" onClick={scrollListLeft}>left</button>
      <button type="button" onClick={scrollListRight}>right</button>
      <MoviesContainer $translate={scrollPosition} ref={moviesContainerRef}>
        {
          movies.map((movie) => (
            <MovieListItem key={movie.id} movie={movie} />
          ))
        }
      </MoviesContainer>

    </Wrapper>
  );
}
