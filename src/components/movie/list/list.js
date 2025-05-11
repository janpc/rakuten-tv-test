/* eslint-disable consistent-return */
import {
  use,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useNavigate } from 'react-router';
import {
  ArrowButton,
  MoviesContainer,
  ScrollContainer,
  Title,
  Wrapper,
} from './list.styles';
import MovieListItem from '../item/item';
import arrowLeft from '../../../assets/images/arrow-left.svg';
import arrowRight from '../../../assets/images/arrow-right.svg';
import { getCurrentMargin } from '../../../utils/responsive';

export default function List({ listPromise }) {
  const {
    name,
    movies,
    error,
    content,
  } = use(listPromise);
  const [isFullLeft, setIsFullLeft] = useState(true);
  const [isFullRight, setIsFullRight] = useState(false);
  const [hover, setHover] = useState(false);
  const scrollContainerRef = useRef();
  const moviesContainerRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      navigate('/error', { state: content });
    }
  }, [error]);

  function scrollListLeft() {
    const margin = getCurrentMargin();
    const containerWidth = scrollContainerRef.current.offsetWidth;
    const x = containerWidth - 2 * margin;

    scrollContainerRef.current.scrollLeft += x;
  }

  function scrollListRight() {
    const margin = getCurrentMargin();
    const containerWidth = scrollContainerRef.current.offsetWidth;
    const currentScroll = scrollContainerRef.current.scrollLeft;
    const x = currentScroll - (containerWidth - 2 * margin);

    scrollContainerRef.current.scrollLeft = x;
  }

  function handleScroll() {
    const margin = getCurrentMargin();
    const containerWidth = scrollContainerRef.current.offsetWidth;
    const fullWidth = moviesContainerRef.current.offsetWidth;
    const currentScroll = scrollContainerRef.current.scrollLeft;
    const maxScroll = fullWidth - (containerWidth - 2 * margin);

    setIsFullLeft(currentScroll === 0);
    setIsFullRight(currentScroll === maxScroll);
  }

  if (error) {
    return;
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
      <ScrollContainer ref={scrollContainerRef} onScroll={handleScroll}>
        <MoviesContainer ref={moviesContainerRef}>
          {
            movies.map((movie) => (
              <MovieListItem key={movie.id} movie={movie} />
            ))
          }
        </MoviesContainer>
      </ScrollContainer>
    </Wrapper>
  );
}
