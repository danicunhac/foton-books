import Header from '../components/Header';
import GlobalStyle, { Container, Spoiler } from '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
      <Spoiler>é sobre as pessoas 💜</Spoiler>
    </Container>
  );
}

export default MyApp;
