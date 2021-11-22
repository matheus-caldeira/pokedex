import styled from 'styled-components';

type Props = {
  'type-name': string;
};

export const Container = styled.h4<Props>`
  width: auto;
  padding: 2px 8px;
  border-radius: ${({ theme }) => theme.pokemons.borderRadius};
  color: ${({ theme }) => theme.secondary};
  background: ${({ theme, 'type-name': typeName }) =>
    theme.pokemons.colors[typeName || 'unknow'] ||
    theme.pokemons.colors.unknown};
  text-transform: capitalize;

  & + h4 {
    margin-left: 16px;
  }
`;
