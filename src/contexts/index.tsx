import { ReactNode } from 'react';
import { ThemeProvider } from './theme';
import { PokemonProvider } from './pokemon';

type IProps = {
  children: ReactNode;
};

function Contexts({ children }: IProps): JSX.Element {
  return (
    <ThemeProvider>
      <PokemonProvider>{children}</PokemonProvider>
    </ThemeProvider>
  );
}

export default Contexts;
