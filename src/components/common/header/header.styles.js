import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
  padding: 20px var(--main-margin) 0;
`;

export const HomeLink = styled(Link)`
  img {
    width: 150px;

    @media (min-width: 450px) {
       width: 200px;
    }

    @media (min-width: 800px) {
       width: 250px;
    }

    @media (min-width: 1100px) {
       width: 300px;
    }
  }
`;
