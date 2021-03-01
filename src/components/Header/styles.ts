import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  flex: 1;
  height: 120px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 10rem;

  background: #fff;
  border-radius: 0 0 100px 100px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

  img {
    width: 32px;
  }

  span {
    font-weight: 600;
  }
`;

export const Form = styled.form`
  flex: 1;
  display: flex;
  justify-content: center;
`;
