import styled from 'styled-components';
import arrowLeft from '../../../assets/images/arrow-left.svg';
import arrow from '../../../assets/images/arrow.svg';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  padding: 1.25rem 1.25rem 0;
`;

export const Header = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  height: 2rem;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 24px;

  button {
    height: 100%;
    background: none;
    border: none;

    .icon {
      width: 1.1rem;
      height: 100%;
      background-color: ${({ theme }) => theme.secondary};
      -webkit-mask: url(${arrowLeft}) no-repeat center;
      mask: url(${arrowLeft}) no-repeat center;
    }
  }

  h1 {
    margin-left: 1rem;
    flex: 1;
    text-transform: capitalize;
  }

  h2 {
    font-size: 0.75rem;
    line-height: 2rem;
  }
`;

export const Nav = styled.nav`
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button,
  span {
    width: 30px;
    height: 30px;
    background: none;
    border: none;

    display: flex;
    justify-content: end;
    align-items: flex-end;

    .icon {
      width: 1.1rem;
      height: 100%;
      background-color: ${({ theme }) => theme.secondary};
      -webkit-mask: url(${arrow}) no-repeat center;
      mask: url(${arrow}) no-repeat center;
    }

    &:first-child {
      justify-content: start;
      .icon {
        transform: rotate(180deg);
      }
    }
  }

  & > img {
    width: 200px;
    height: 200px;
    object-fit: contain;
    margin: 0 auto;
  }
`;
