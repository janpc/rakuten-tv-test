import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  z-index: 0;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #000d;
  transition: opacity 0.2s ease-in;
  z-index: 10;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
`;

export const Content = styled.section`
  position: absolute;
  width: 100%;
  max-width: 936px;
  transform: translateY(0px);
  opacity: 1;
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
  background-color: var(--bg-color);
  border-radius: 24px;
  margin-top: 32px;
  margin-bottom: 32px;
  min-height: 100px;
  overflow: hidden;
`;
export const CloseButton = styled.button`
  outline: none;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  border-radius: 100%;
  cursor: pointer;
  min-width: 32px;
  min-height: 32px;
  background: rgba(0, 0, 0, 0.55);
  border: 1px solid rgba(240, 240, 240, 0.64);
  top: 16px;
  right: 16px;
  z-index: 2;

  @media (min-width: 800px) {
    top: 32px;
    right: 32px;
  }

  @media (min-width: 1100px) {
    min-width: 40px;
    min-height: 40px;
  }
`;

export const CloseCross = styled.img`
  height: 20px;
  width: 20px;
`;
