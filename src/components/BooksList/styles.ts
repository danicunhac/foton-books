import styled from 'styled-components';
import { appearFromRight } from '../../styles/Home/styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`;

export const Container = styled.div`
  padding: 1rem 0;
  flex: 1;
  display: flex;
  flex-wrap: wrap;

  animation: ${appearFromRight} 1s;

  div {
    margin-bottom: 1rem;
  }
`;

export const Book = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;

  img {
    object-fit: contain;
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    height: 300px;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  button {
    width: 200px;
    border-radius: 10px;
    border: 0;
    padding: 0.5rem;
  }
`;

export const ShowMoreButton = styled.button`
  background: purple;
  color: #fff;
`;

export const ShowLessButton = styled.button`
  background: #000;
  color: #fff;
`;
