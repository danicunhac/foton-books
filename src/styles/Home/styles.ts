import styled, { keyframes } from 'styled-components';

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(500px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const Main = styled.section`
  height: 100%;
  padding: 10rem 10rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromRight} 1s;
`;

export const Title = styled.h1`
  color: #444;
  font-size: 3rem;

  span {
    color: #222;
  }
`;

export const Container = styled.div`
  max-width: 992px;
  overflow: hidden;
  margin: 0 auto;
`;
