import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 0;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  div {
    margin-bottom: 1rem;
  }
`;

export const Book = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    object-fit: contain;
    border-radius: 10px;
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
  }
`;
