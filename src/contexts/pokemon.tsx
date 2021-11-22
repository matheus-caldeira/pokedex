import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react';

import IPokemon from '../dtos/IPokemon';
import Service from '../service';

type IOrder = 'text' | 'numeric';

interface IPokemonContextData {
  pokemons: IPokemon[];
  order: IOrder;
  includePokemons(firstLoad?: boolean): Promise<void>;
  filterPokemonsByName(name: string): void;
  alterOrderPokemons(): void;
  includeDescription(pokemon: IPokemon): Promise<IPokemon>;
}

const PokemonContext = createContext<IPokemonContextData>(
  {} as IPokemonContextData,
);

type IProps = {
  children: React.ReactNode;
};

function PokemonProvider({ children }: IProps): JSX.Element {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [order, setOrder] = useState<IOrder>('numeric');
  const offetSetPage = useRef(0);
  const limitBypage = 12;

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

  const alterOrderPokemons = useCallback(() => {
    let newOrder: IOrder = 'numeric';
    setOrder(state => {
      newOrder = state === 'numeric' ? 'text' : 'numeric';

      return newOrder;
    });
    setPokemons(state => {
      const sortable = [...state];
      return sortable.sort((a, b) => {
        if (newOrder === 'numeric') return a.id - b.id;

        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });
    });
  }, []);

  const includePokemons = useCallback(async (firstLoad?: boolean) => {
    if (offetSetPage.current >= 700 || (firstLoad && offetSetPage.current > 0))
      return;
    const api = Service.getInstance();

    const data = await api.list(offetSetPage.current, limitBypage);

    offetSetPage.current += data.length;

    setPokemons(state => [...state, ...data]);
  }, []);

  const includeDescription = useCallback(async (pokemon: IPokemon) => {
    const api = Service.getInstance();

    const description = await api.getDescription(pokemon.id);

    setPokemons(state =>
      state.map(current => {
        if (current.id === pokemon.id) return { ...current, description };
        return current;
      }),
    );

    return {
      ...pokemon,
      description,
    };
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        order,
        filterPokemonsByName,
        alterOrderPokemons,
        includePokemons,
        includeDescription,
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
