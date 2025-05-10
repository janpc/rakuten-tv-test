import styled from 'styled-components';

export const Container = styled.div`
    gap: 8px;
    padding: 8px;
    display: flex;
    align-items: center;
    background-color: rgba(240, 240, 240, 0.1);
    border-radius: 4px;
`;

export const Photo = styled.img`
  height: 48px;
  width: 32px;
  border-radius: 2px;
`;

export const Name = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgb(214, 214, 214);
  font-size: 0.833rem;
`;
