import { createContext, ReactNode, useState } from 'react';

interface SearchContextData {
  searchName: string;
  selectedBook: any;
  handleSearch: (input: string) => void;
  handleSelect: (book: Object) => void;
}

interface SearchContextProps {
  children: ReactNode;
}

export const SearchContext = createContext({} as SearchContextData);

export const SearchProvider = ({ children }: SearchContextProps) => {
  const [searchName, setSearchName] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSearch = (input: string) => {
    setSearchName(input);
  };

  const handleSelect = (book: Object) => {
    setSelectedBook(book);
  };

  return (
    <SearchContext.Provider
      value={{ searchName, selectedBook, handleSearch, handleSelect }}
    >
      {children}
    </SearchContext.Provider>
  );
};
