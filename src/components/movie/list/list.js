import { use, useRef, useState } from 'react';
import {
  ArrowButton,
  MoviesContainer,
  Title,
  Wrapper,
} from './list.styles';
import MovieListItem from '../item/item';
import arrowLeft from '../../../assets/images/arrow-left.svg';
import arrowRight from '../../../assets/images/arrow-right.svg';

export default function List({ listPromise }) {
  const { name, movies } = use(listPromise);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isFullLeft, setIsFullLeft] = useState(true);
  const [isFullRight, setIsFullRight] = useState(false);
  const [hover, setHover] = useState(false);
  const moviesContainerRef = useRef();

  function scrollListLeft() {
    let x = scrollPosition - (window.innerWidth - (64 * 2));
    const totalWidth = moviesContainerRef.current.getBoundingClientRect().width;
    const maxScroll = -totalWidth + (window.innerWidth - (64 * 2));

    if (x < maxScroll) {
      x = maxScroll;
    }

    setIsFullRight(x === maxScroll);
    setIsFullLeft(false);

    setScrollPosition(x);
  }

  function scrollListRight() {
    let x = scrollPosition + window.innerWidth - (64 * 2);

    if (x > 0) {
      x = 0;
    }

    setIsFullLeft(x === 0);
    setIsFullRight(false);

    setScrollPosition(x);
  }

  return (
    <Wrapper
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
    >
      <Title>{name}</Title>
      <ArrowButton
        type="button"
        onClick={scrollListLeft}
        $position="left"
        $display={hover && !isFullRight}
        disabled={isFullRight}
      >
        <img alt="Move left arrow" src={arrowLeft} />
      </ArrowButton>
      <ArrowButton
        type="button"
        onClick={scrollListRight}
        $position="right"
        $display={hover && !isFullLeft}
        disabled={isFullLeft}
      >
        <img alt="Move right arrow" src={arrowRight} />
      </ArrowButton>
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
