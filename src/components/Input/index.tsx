import React, {
  useRef,
  useState,
  useCallback,
  InputHTMLAttributes,
} from 'react';

import { IconBaseProps } from 'react-icons/lib';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>;
  isVisible?: boolean;
}

const Input: React.FC<InputProps> = ({ icon: Icon, isVisible }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

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
        />
        {Icon && <Icon size={20} onClick={() => {}} />}
      </Container>
    </>
  );
};

export default Input;
