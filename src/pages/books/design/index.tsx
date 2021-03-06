import { GetServerSideProps } from 'next';
import React, { useEffect } from 'react';
import BooksList from '../../../components/BooksList';
import api from '../../../services/api';

import { Wrapper } from '../../../styles/global';

interface Books {
  books: NodeList;
}

const Design = ({ books }: Books) => {
  useEffect(() => {
    console.log(books);
  }, []);

  return (
    <Wrapper>
      <BooksList books={books} />
    </Wrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get(
    '?q=design&key=AIzaSyCHrX0SWrLb5gDxgXfqGp393bN9951IHpQ'
  );

  return {
    props: {
      books: data.items,
    },
  };
};

export default Design;
