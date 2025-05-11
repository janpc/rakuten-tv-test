import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - (2 * var(--main-margin)));
  gap: 50px;
`;

export const Message = styled.p`
  color: white;
  font-size: 2rem;

`;

export const Logo = styled.img`
  width: 500px;
`;
