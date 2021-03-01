import React, { useEffect, useState } from 'react';

import { Book, Container } from './styles';

const BooksList = ({ books }) => {
  return (
    <Container>
      {books.map((book) => (
        <Book>
          <img src={book.volumeInfo.imageLinks.thumbnail} key={book.id} />
        </Book>
      ))}
    </Container>
  );
};

export default BooksList;
