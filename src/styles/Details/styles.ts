import { FiHeart } from 'react-icons/fi';
import styled, { css } from 'styled-components';

interface FavoriteProps {
  isFavorite: boolean;
}

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
`;

export const Aside = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5rem;

  img {
    object-fit: contain;
    border-radius: 5px;
    height: 400px;
  }

  div {
    margin-top: 3.5rem;
    input {
      width: 100%;
      padding: 1rem;
      margin-top: 0.5rem;
      border: none;
      box-shadow: 0 0 16px rgba(0, 0, 0, 0.3);
      border-radius: 5px;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > p {
    padding: 1rem;
    border-radius: 10px;
    margin: 0.5rem 0;
    background: #fff;
    font-size: 0.9rem;
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.2);
  }
`;

export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  font-weight: 600;

  span {
    margin-top: 0.5rem;
    font-size: 1rem;
    color: rgba(50, 50, 50, 0.5);
  }
`;

export const SaleInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;

  a {
    font-weight: 600;
  }
`;

export const Price = styled.span`
  font-size: 1.5rem;
  font-family: sans-serif;
  font-weight: 600;
`;

export const Rating = styled.p``;

export const FavoriteButton = styled(FiHeart)<FavoriteProps>`
  ${(props) =>
    props.isFavorite &&
    css`
      color: red;
      fill: red;
    `}
`;
