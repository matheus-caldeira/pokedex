import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    /* font-size: 20px; */
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.primary};
    font-size: ${({ theme }) => theme.spacing.regular.size};
    line-height: ${({ theme }) => theme.spacing.regular.line};
  }

  h1 {
    font-size: ${({ theme }) => theme.spacing.veryLarge.size};
    line-height: ${({ theme }) => theme.spacing.veryLarge.line};
  }

  h2 {
    font-size: ${({ theme }) => theme.spacing.large.size};
    line-height: ${({ theme }) => theme.spacing.large.line};
  }

  h3 {
    font-size: ${({ theme }) => theme.spacing.medium.size};
    line-height: ${({ theme }) => theme.spacing.medium.line};
  }

  h4, p {
    font-size: ${({ theme }) => theme.spacing.regular.size};
    line-height: ${({ theme }) => theme.spacing.regular.line};
  }

  h5, small {
    font-size: ${({ theme }) => theme.spacing.small.size};
    line-height: ${({ theme }) => theme.spacing.small.line};
  }

  input, button {
    font-size: ${({ theme }) => theme.spacing.regular.size};
    line-height: 0;
    color: ${({ theme }) => theme.primary};
  }

  button {
    cursor: pointer;
  }

`;

export default GlobalStyle;
