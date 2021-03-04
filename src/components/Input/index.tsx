import React, {
  useRef,
  useState,
  useCallback,
  InputHTMLAttributes,
  useContext,
} from 'react';

import { IconBaseProps } from 'react-icons/lib';
import { SearchContext } from '../../context/SearchContext';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>;
  isVisible?: boolean;
}

const Input: React.FC<InputProps> = ({ icon: Icon, isVisible }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const { handleSearch } = useContext(SearchContext);

  const [searchValue, setSearchValue] = useState('');

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <>
      <Container isFocused={isFocused} isVisible={isVisible}>
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          ref={inputRef}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        />
        {Icon && <Icon onClick={() => handleSearch(searchValue)} size={20} />}
      </Container>
    </>
  );
};

export default Input;
