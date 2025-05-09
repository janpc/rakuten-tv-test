import styled from 'styled-components';

export const Title = styled.h1`
  transition: color 0.15s ease-out;
  display: block;
  word-break: break-word;
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--main-color);
  text-align: left;
  margin-bottom: 1.2rem;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.section`
  position: relative;
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

export const ArrowButton = styled.button`
  position: absolute;
  top: 1.2rem;
  bottom: 0;
  color: white;
  ${(props) => props.$position}: 0;
  background-color: red;
  min-width: var(--main-margin);
  z-index: 1;
  background: linear-gradient(to ${(props) => props.$position}, transparent 0%, var(--bg-color) 90%);
  border: none;

  ${(props) => (!props.disabled && 'cursor: pointer;')}

  img {
    display: ${(props) => (props.$display ? 'block' : 'none')};
  }
`;
