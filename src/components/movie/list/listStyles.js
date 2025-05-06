import styled from 'styled-components';

export const Title = styled.h1`
  transition: color 0.15s ease-out;
  display: block;
  word-break: break-word;
  font-size: 1.2rem;
  font-weight: bold;
  color: rgb(240, 240, 240);
  text-align: left;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export const MoviesContainer = styled.div`
  display: flex;
`;
