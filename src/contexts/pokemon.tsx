import { createContext, useCallback, useContext, useState } from 'react';

import IPokemon from '../dtos/IPokemon';

import fakeData from '../utils/fakePokemons';

interface IPokemonContextData {
  pokemons: IPokemon[];
  filterPokemonsByName(name: string): void;
  alterOrderPokemons(order: 'text' | 'numeric'): void;
}

const PokemonContext = createContext<IPokemonContextData>(
  {} as IPokemonContextData,
);

type IProps = {
  children: React.ReactNode;
};

function PokemonProvider({ children }: IProps): JSX.Element {
  const [pokemons, setPokemons] = useState<IPokemon[]>(fakeData);

  const filterPokemonsByName = useCallback((name: string): void => {
    setPokemons(state => {
      return state.map(pokemon => {
        return {
          ...pokemon,
          hidden: !pokemon.name
            .toLocaleLowerCase()
            .match(name.toLocaleLowerCase()),
        };
      });
    });
  }, []);

  const alterOrderPokemons = useCallback((order: 'text' | 'numeric'): void => {
    setPokemons(state => {
      const sortable = [...state];
      return sortable.sort((a, b) => {
        if (order === 'numeric') return a.id - b.id;

        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });
    });
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        filterPokemonsByName,
        alterOrderPokemons,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

function usePokemon(): IPokemonContextData {
  const context = useContext(PokemonContext);

  if (!context)
    throw new Error('usePokemon must be used within a PokemonProvider');

  return context;
}

export { usePokemon, PokemonProvider };
