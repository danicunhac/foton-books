import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

    @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: #ffe208;
    color: #434343;
    -webkit-font-smoothing: antialiased;
    height: 100vh;
  }

  body, input, button {
    font: 400 1rem 'Montserrat', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

    a {
    color: inherit;
    text-decoration: none;
  }
`;

export const Container = styled.div`
  overflow-x: hidden;
`;

export const Spoiler = styled.span`
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
`;

export const Wrapper = styled.div`
  max-width: 992px;
  margin: 0 auto;
`;
