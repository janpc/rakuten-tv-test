import { Link } from 'react-router';
import styled from 'styled-components';

export const MovieLink = styled(Link)`
  display: flex;
  width: calc((100vw - (var(--main-margin) * 2)) / 3);
  padding-inline: 2px;
  box-sizing: border-box;
  position: relative;
  outline: none;

  &:hover, &:focus {
    z-index: 10;
  }


  @media (min-width: 450px) {
    width: calc((100vw - (var(--main-margin) * 2)) / 4);
  }

  @media (min-width: 800px) {
    width: calc((100vw - (var(--main-margin) * 2)) / 6);
  }

  @media (min-width: 1100px) {
    width: calc((100vw - (var(--main-margin) * 2)) / 7);
  }

  @media (min-width: 1920px) {
    width: calc((100vw - (var(--main-margin) * 2)) / 9);
  }
`;

export const EmptyItem = styled.div`
  width: 100%;
  aspect-ratio: 5/7;
  object-fit: cover;
  background-color: var(--loading-color);
`;

export const ArtWork = styled.img`
  width: 100%;
  position: relative;
  transition: all 0.2s ease-in-out;
  aspect-ratio: 5/7;
  object-fit: cover;

  &:hover, &:focus, ${MovieLink}:focus & {
    transform: scale(1.1);
    z-index: 10;
    filter: drop-shadow(0 0 10px #fff8);
    outline: 1px solid white;
  }
`;
