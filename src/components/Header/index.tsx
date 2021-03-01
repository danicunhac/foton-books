import Link from 'next/link';
import React, { useState } from 'react';
import { FiSearch, FiChevronRight } from 'react-icons/fi';

import Input from '../Input';

import { Container, Form, Wrapper } from './styles';

const Header = () => {
  const [showInput, toggleShowInput] = useState(false);

  return (
    <Wrapper>
      <Container>
        <Link href="/">
          <img src="/assets/favicon.png" />
        </Link>
        <Link href="/books/design">
          <span>Design</span>
        </Link>
        <Link href="/books/history">
          <span>History</span>
        </Link>
        <Link href="/books/science">
          <span>Science</span>
        </Link>
        <FiSearch onClick={() => toggleShowInput(!showInput)} size={20} />
      </Container>
      <Form>
        <Input isVisible={showInput} icon={FiChevronRight}></Input>
      </Form>
    </Wrapper>
  );
};

export default Header;
