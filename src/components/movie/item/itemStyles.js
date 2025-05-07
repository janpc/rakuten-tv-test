import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieLink = styled(Link)`
  display: flex;
  width: calc((100vw - (var(--main-margin) * 2)) / 9);
  padding-inline: 2px;
  box-sizing: border-box;
`;

export const ArtWork = styled.img`
  width: 100%;
`;
