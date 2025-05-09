import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieLink = styled(Link)`
  display: flex;
  width: calc((100vw - (var(--main-margin) * 2)) / 9);
  padding-inline: 2px;
  box-sizing: border-box;
  position: relative;
  outline: none;

  &:hover, &:focus {
    z-index: 10;
  }
`;

export const ArtWork = styled.img`
  width: 100%;
  position: relative;
  transition: all 0.2s ease-in-out;

  &:hover, &:focus, ${MovieLink}:focus & {
    transform: scale(1.1);
    z-index: 10;
    filter: drop-shadow(0 0 10px #fff8);
    outline: 1px solid white;
  }
`;
