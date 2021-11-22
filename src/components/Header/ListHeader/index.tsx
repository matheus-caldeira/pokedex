import { useCallback, useEffect, useState } from 'react';
import { usePokemon } from '../../../contexts/pokemon';

import pokeball from '../../../assets/images/pokeball.svg';
import arrowDown from '../../../assets/images/arrow-down.svg';

import Search from './Search';

import { Container, Header } from './styles';

function ListHeader(): JSX.Element {
  const { alterOrderPokemons } = usePokemon();
  const [sortType, setSortType] = useState<'numeric' | 'text'>('numeric');

  const handleSort = useCallback(() => {
    setSortType(state => (state === 'numeric' ? 'text' : 'numeric'));
  }, []);

  useEffect(() => {
    alterOrderPokemons(sortType);
  }, [sortType, alterOrderPokemons]);

  return (
    <Container>
      <Header sortType={sortType}>
        <img src={pokeball} alt="Pokédex logo" />
        <h1>Pokédex</h1>
        <button type="button" onClick={handleSort}>
          <p>{sortType === 'numeric' ? '#' : 'AZ'}</p>
          <img src={arrowDown} alt="Icone de ordenação" />
        </button>
      </Header>
      <Search />
    </Container>
  );
}

export default ListHeader;
