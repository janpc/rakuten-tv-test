import { Link } from 'react-router';
import styled from 'styled-components';

export const Container = styled.header`
  padding: 20px var(--main-margin) 0;
`;

export const HomeLink = styled(Link)`
  img {
    width: 100px;

    @media (min-width: 450px) {
       width: 150px;
    }

    @media (min-width: 800px) {
       width: 200px;
    }
  }
`;
