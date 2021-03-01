import Head from 'next/head';
import BooksList from '../components/BooksList';
import Header from '../components/Header';
import { Container, Main, Title } from '../styles/Home/styles';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Início | Books</title>
      </Head>
      <Main>
        <Title>
          Books in the palm of your hand. <span>Search now.</span>
        </Title>
      </Main>
    </Container>
  );
}
