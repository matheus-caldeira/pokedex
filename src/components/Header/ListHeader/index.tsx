import { usePokemon } from '../../../contexts/pokemon';

import pokeball from '../../../assets/images/pokeball.svg';
import arrowDown from '../../../assets/images/arrow-down.svg';

import Search from './Search';

import { Container, Header } from './styles';

function ListHeader(): JSX.Element {
  const { alterOrderPokemons, order } = usePokemon();

  return (
    <Container>
      <Header sort-type={order}>
        <img src={pokeball} alt="Pokédex logo" />
        <h1>Pokédex</h1>
        <button type="button" onClick={alterOrderPokemons}>
          <p>{order === 'numeric' ? '#' : 'AZ'}</p>
          <img src={arrowDown} alt="Icone de ordenação" />
        </button>
      </Header>
      <Search />
    </Container>
  );
}

export default ListHeader;
