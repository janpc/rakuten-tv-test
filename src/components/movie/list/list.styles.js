import styled from 'styled-components';

export const Title = styled.h1`
  transition: color 0.15s ease-out;
  display: block;
  word-break: break-word;
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--main-color);
  text-align: left;
  margin: 0 var(--main-margin);
`;

export const LoadingTitle = styled.div`
  width: 400px;
  height: 1.2rem;
  background-color: var(--loading-color);
  margin-bottom: 1.2rem;
  margin: 0 var(--main-margin);
`;

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
`;

export const ScrollContainer = styled.div`
  position: relative;
  overflow-x: scroll;
  width: 100%;
  padding: 1.2rem var(--main-margin) 50px;
  box-sizing: border-box;
  scroll-behavior: smooth;

  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
  }
`;

export const MoviesContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  transition: transform 0.5s ease-in-out;
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 1.2rem;
  bottom: 50px;
  color: white;
  ${(props) => props.$position}: 0;
  background-color: red;
  min-width: var(--main-margin);
  width: 40px;
  z-index: 1;
  background: linear-gradient(to ${(props) => props.$position}, transparent 0%, var(--bg-color) 90%);
  border: none;
  outline: none;

  ${(props) => (!props.disabled && 'cursor: pointer;')}

  img {
    display: ${(props) => (props.$display ? 'block' : 'none')};
  }

  &:hover img, &:focus img {
      transform: scale(1.1);
      z-index: 10;
      filter: drop-shadow(0 0 15px #fff);
    }
`;
