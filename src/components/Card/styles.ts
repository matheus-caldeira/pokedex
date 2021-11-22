import styled from 'styled-components';

type Props = {
  pokemonType: string;
};

export const Container = styled.div<Props>`
  background: ${({ theme: { pokemons }, pokemonType }) =>
    pokemons.colors[pokemonType] || pokemons.colors.unknown};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0.063rem;
  height: 7rem;
  overflow: hidden;
  position: relative;

  @media (min-width: 768px) {
    height: 13rem;
  }
`;

export const ImageContent = styled.div<Props>`
  height: 78.6%;
  background: ${({ theme }) => theme.secondary};
  color: ${({ theme: { pokemons }, pokemonType }) =>
    pokemons.colors[pokemonType] || pokemons.colors.unknown};
  border-radius: ${({ theme: { borderRadius } }) =>
    `${borderRadius} ${borderRadius} 0 0`};
  padding: 0.25rem 0.5rem 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    text-align: end;
    font-size: ${({ theme }) => theme.spacing.small.size};
    line-height: ${({ theme }) => theme.spacing.small.line};
  }

  img {
    height: 81.82%;
    object-fit: contain;
  }
`;

export const NameContent = styled.div`
  height: 21.4%;

  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.secondary};
`;
