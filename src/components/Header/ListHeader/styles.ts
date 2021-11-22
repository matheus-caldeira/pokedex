import styled, { css } from 'styled-components';

type IHeaderProps = {
  'sort-type': 'numeric' | 'text';
};

const sortTypeVariations = {
  numeric: css`
    font-size: 0.625rem;
    line-height: 0.5rem;
    font-weight: 600;
  `,
  text: css`
    font-size: 0.5rem;
    line-height: 0.5rem;
    font-weight: 700;
  `,
};

export const Container = styled.header`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div<IHeaderProps>`
  display: flex;
  position: relative;
  align-items: center;
  height: 2rem;

  img {
    height: 1.5rem;
    width: auto;
  }

  h1 {
    margin-left: 1rem;
    flex: 1;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 2.5rem;
    padding: 0 0.625rem;
    background: none;
    border: none;

    p {
      writing-mode: vertical-rl;
      text-orientation: upright;
      ${props => sortTypeVariations[props['sort-type']]}
    }

    img {
      height: 1rem;
    }
  }
`;
