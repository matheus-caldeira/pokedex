import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.primary};
  text-transform: capitalize;
  text-align: center;

  & > div {
    height: 36px;
    display: flex;
    align-items: center;

    img {
      width: 16px;
      height: 16px;
      margin-right: 8px;
    }
  }

  small {
    color: ${({ theme }) => theme.input};
  }
`;
