import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isVisible: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #fff;
  border-radius: 8px;
  padding: 0.75rem;
  width: 300px;
  color: #434343;
  opacity: 0;

  display: flex;
  align-items: center;
  align-self: center;

  margin-top: 1rem;

  transition: opacity 0.1s;

  ${(props) =>
    props.isFocused &&
    css`
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    `}

  ${(props) =>
    props.isVisible &&
    css`
      opacity: 1;
    `}

  input {
    flex: 1;
    border: 0;
    color: #434343;
    font-size: 1rem;
    background: transparent;
  }
`;
