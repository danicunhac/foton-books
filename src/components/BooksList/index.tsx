import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../context/SearchContext';

import {
  Book,
  Container,
  Wrapper,
  ButtonsContainer,
  ShowMoreButton,
  ShowLessButton,
} from './styles';

const BooksList = ({ books }) => {
  const { searchName, handleSelect } = useContext(SearchContext);
  const [shownBooks, setShownBooks] = useState([]);
  const [visibleAmount, setVisibleAmount] = useState(4);

  useEffect(() => {
    if (searchName) {
      const filteredBooks = books.filter((book) =>
        book.volumeInfo.title.toLowerCase().includes(searchName.toLowerCase())
      );

      console.log(filteredBooks);

      setShownBooks(filteredBooks);
      return;
    }

    setShownBooks(books);
  }, [searchName]);

  const handleShowMoreBooks = () => {
    setVisibleAmount((prevAmount) => prevAmount + 4);
  };

  const handleShowLessBooks = () => {
    setVisibleAmount((prevAmount) => prevAmount - 4);
  };

  return (
    <Wrapper>
      <Container>
        {shownBooks.slice(0, visibleAmount).map((book) => (
          <Link key={book.id} href="/books/details">
            <Book onClick={() => handleSelect(book)}>
              <img src={book.volumeInfo.imageLinks.thumbnail} />
            </Book>
          </Link>
        ))}
      </Container>
      <ButtonsContainer>
        {visibleAmount > 4 ? (
          <ShowLessButton onClick={handleShowLessBooks}>
            Show less
          </ShowLessButton>
        ) : null}
        <ShowMoreButton onClick={handleShowMoreBooks}>Show more</ShowMoreButton>
      </ButtonsContainer>
    </Wrapper>
  );
};

export default BooksList;
