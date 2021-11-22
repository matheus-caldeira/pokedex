import styled from 'styled-components';
import pokeball from '../../assets/images/pokeball.svg';

type Props = {
  'pokemon-type'?: string;
};

export const Container = styled.div<Props>`
  position: relative;
  color: ${({ theme: { pokemons }, 'pokemon-type': pokemonType }) =>
    pokemons.colors[pokemonType || 'unknown'] || pokemons.colors.unknown};

  width: 100%;
  min-height: 100vh;
  padding: 4px;
  display: flex;
  flex-direction: column;

  .background {
    position: absolute;
    right: 8px;
    top: 8px;
    opacity: 0.1;
    width: calc(100vw * 0.577);
    height: calc(100vw * 0.577);
    max-height: 40%;
    background-color: ${({ theme }) => theme.secondary};
    -webkit-mask: url(${pokeball}) no-repeat right;
    -webkit-mask-size: contain;
    mask: url(${pokeball}) no-repeat right;
    mask-size: contain;
  }

  &,
  .progress {
    background: ${({ theme: { pokemons }, 'pokemon-type': pokemonType }) =>
      pokemons.colors[pokemonType || 'unknown'] || pokemons.colors.unknown};
  }
`;

export const Content = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.secondary};
  margin-top: -56px;
  padding: 56px 20px 0;

  border-radius: ${({ theme }) => theme.borderRadius};

  & > * {
    margin-bottom: 16px;
    display: flex;
    justify-content: center;
  }

  p {
    color: ${({ theme }) => theme.primary};
  }

  hr {
    background: ${({ theme }) => theme.border};
    width: 1px;
    border-radius: ${({ theme }) => theme.borderRadius};
    opacity: 0.5;
    margin: 0 24px;
  }

  & > div:last-child {
    flex-direction: column;
  }
`;
