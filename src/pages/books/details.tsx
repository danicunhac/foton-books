import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { FiStar } from 'react-icons/fi';
import { SearchContext } from '../../context/SearchContext';

import {
  DetailsContainer,
  Title,
  Info,
  SaleInfo,
  Price,
  Rating,
  FavoriteButton,
  Aside,
} from '../../styles/Details/styles';
import { Wrapper } from '../../styles/global';

const BookDetails = () => {
  const { selectedBook } = useContext(SearchContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const [stars] = useState([1, 2, 3, 4, 5]);
  const [rating, setRating] = useState(3);
  const [_, setNote] = useState('');

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    console.log(selectedBook);
  }, []);

  return (
    <Wrapper>
      {selectedBook && (
        <DetailsContainer>
          <Aside>
            <img
              src={selectedBook.volumeInfo.imageLinks.thumbnail}
              alt={selectedBook.etag}
            />
            <div>
              <span>Leave a note!</span>
              <input type="text" onChange={(e) => setNote(e.target.value)} />
            </div>
          </Aside>
          <Info>
            <Title>
              {selectedBook.volumeInfo.title}
              <span>
                by {selectedBook.volumeInfo.authors[0]} in{' '}
                {selectedBook.volumeInfo.publishedDate}
              </span>
            </Title>

            <SaleInfo>
              {selectedBook.saleInfo.listPrice ? (
                <Price>R${selectedBook.saleInfo.listPrice.amount}</Price>
              ) : (
                <Link href={selectedBook.saleInfo.buyLink}>
                  Click here to buy
                </Link>
              )}

              <Rating>
                {stars.map((_, index) => {
                  if (index + 1 <= rating) {
                    return (
                      <FiStar
                        key={index}
                        onClick={() => setRating(index + 1)}
                        onDoubleClick={() => setRating(0)}
                        size={20}
                        fill="purple"
                      />
                    );
                  } else {
                    return (
                      <FiStar
                        key={index}
                        onClick={() => setRating(index + 1)}
                        size={20}
                      />
                    );
                  }
                })}
              </Rating>
              <FavoriteButton
                onClick={toggleFavorite}
                isFavorite={isFavorite}
                size={20}
              />
            </SaleInfo>
            <p>
              {selectedBook.volumeInfo.description
                ? `${selectedBook.volumeInfo.description}`
                : 'No description available'}
            </p>
          </Info>
        </DetailsContainer>
      )}
    </Wrapper>
  );
};

export default BookDetails;
