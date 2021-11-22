import { usePokemon } from '../../contexts/pokemon';

import { ListHeader } from '../../components/Header';
import Card from '../../components/Card';

import { Container, Content } from './styles';

function Home(): JSX.Element {
  const { pokemons } = usePokemon();
  return (
    <Container>
      <ListHeader />
      <Content>
        {pokemons.map(pokemon =>
          pokemon.hidden ? null : <Card key={pokemon.id} pokemon={pokemon} />,
        )}
      </Content>
    </Container>
  );
}

export default Home;
