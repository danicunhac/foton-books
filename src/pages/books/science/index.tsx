import { GetServerSideProps } from 'next';
import React from 'react';
import BooksList from '../../../components/BooksList';
import api from '../../../services/api';

import { Container } from './styles';

interface Books {
  books: NodeList;
}

const Science = ({ books }: Books) => {
  return (
    <Container>
      <BooksList books={books} />
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get(
    '?q=science&key=AIzaSyCHrX0SWrLb5gDxgXfqGp393bN9951IHpQ'
  );

  return {
    props: {
      books: data.items,
    },
  };
};

export default Science;
