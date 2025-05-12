import { Link } from 'react-router';
import styled from 'styled-components';

export const SnapshotContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Snapshot = styled.img`
  width: 100%;
`;

export const ImageContent = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding: 16px 16px 0;
  background: linear-gradient(to bottom, transparent 0%, var(--bg-color) 90%);

  @media (min-width: 800px) {
    padding: 24px 24px 0;
  }
`;

export const ImageTitle = styled.img`
  max-width: 214px;
  max-height: 72px;

  @media (min-width: 1100px) {
    max-width: 320px;
    max-height: 106px;
  }
`;

export const Title = styled.h1`
    transition: color 0.15s ease-out;
    display: block;
    word-break: break-word;
    font-size: 2rem;
    font-family: "RakutenSans Bold", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Oxygen, Cantarell, sans-serif;
    font-weight: bold;
    color: rgb(240, 240, 240);
    text-align: left;
    line-height: 2.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media (min-width: 1100px) {
      line-height: 62.2px;
    }
`;

export const TrailerButton = styled(Link)`
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  border-radius: 100%;
  cursor: pointer;
  width: 60px;
  height: 60px;
  background: none;
  border: none;

  &:hover, &:focus {
    background-color: rgba(240, 240, 240, 0.15);
  }
`;

export const TrailerImage = styled.img`
  height: 30px;
  width: 30px;
`;

export const MovieInfo = styled.div`
  color: white;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 0px var(--main-margin);

  @media (min-width: 1100px) {
    margin-top: 40px;
  }

  @media (min-width: 800px) {
    flex-direction: row;
    gap: 40px;
  }
`;

export const Genres = styled.div`
  width: calc(100% - 80px);
  display: flex;
  flex-wrap: wrap;
  align-self: flex-start;
  flex-shrink: 0;
  word-break: break-word;
  font-size: 0.833rem;
  gap: 5px;

  @media (min-width: 800px) {
    width: 220px;
  }
`;

export const Description = styled.div`
  width: calc(100% - 80px);
  display: flex;
  flex-direction: column;
  gap: 12px;

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${(props) => (props.$full ? 'none' : '3')};
    -webkit-box-orient: vertical;
    line-height: 24px;
  }

  @media (min-width: 800px) {
    line-height: 24px;
  }

  @media (min-width: 800px) {
    width: calc(100% - 340px);
  }
`;

export const ShowMore = styled.button`
  border: none;
  background: none;
  color: white;
  padding: 0;
  width: fit-content;
`;

export const People = styled.div`
  color: white;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
  margin-bottom: 40px;
  padding: 0px var(--main-margin);

  @media (min-width: 1100px) {
    margin-top: 40px;
  }

  @media (min-width: 800px) {
    flex-direction: row;
    gap: 40px;
  }
`;

export const Directors = styled.div`
  width: calc(100% - 2 * var(--main-margin));
  display: flex;
  flex-wrap: wrap;
  align-self: flex-start;
  flex-shrink: 0;
  word-break: break-word;
  font-size: 0.833rem;
  gap: 8px;

  @media (min-width: 800px) {
    width: 220px;
  }
`;

export const Cast = styled.div`
  width: calc(100% - 2 * var(--main-margin));
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 800px) {
    line-height: 24px;
  }

  @media (min-width: 800px) {
    width: calc(100% - 340px);
  }
`;

export const PeopleList = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;
  width: 100%;
  overflow: hidden;
  margin-top: 8px;
  max-height: 100%;

  @media (min-width: 800px) {
    ${(props) => `grid-template-columns: repeat(${props.$cols}, 1fr);`}
  }
`;

export const PeopleTitle = styled.h2`
  display: block;
  word-break: break-word;
  font-size: 0.833rem;
  font-weight: 600;
  color: white;
  text-align: left;
  line-height: 20px;
`;

export const LoadingContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = styled.img`
  width: 60px;
  margin: 0 auto;
`;
