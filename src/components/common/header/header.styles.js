import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
  padding: 20px var(--main-margin) 0;
`;

export const HomeLink = styled(Link)`
  img {
    width: 300px;
  }
`;
