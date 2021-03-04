import Header from '../components/Header';
import { SearchProvider } from '../context/SearchContext';
import GlobalStyle, { Container, Spoiler } from '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <SearchProvider>
        <Header />
        <Component {...pageProps} />
      </SearchProvider>
      <GlobalStyle />
      <Spoiler>pessoas 💜</Spoiler>
    </Container>
  );
}

export default MyApp;
