import styled from 'styled-components';

export const Title = styled.h1`
  transition: color 0.15s ease-out;
  display: block;
  word-break: break-word;
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--main-color);
  text-align: left;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.section`
  padding: 0 var(--main-margin);
  margin-bottom: 50px;
`;

export const MoviesContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  overflow: hidden;
  transform: translateX(${(props) => props.$translate}px);
  transition: transform 0.5s ease-in-out;
`;
