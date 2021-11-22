import { useCallback, useEffect, useRef } from 'react';
import { usePokemon } from '../../contexts/pokemon';

import { ListHeader } from '../../components/Header';
import Card from '../../components/Card';

import { Container, Content } from './styles';

function Home(): JSX.Element {
  const { pokemons, includePokemons } = usePokemon();
  const loading = useRef(true);

  const loadPokemons = useCallback(async () => {
    if (loading.current) return;
    loading.current = true;
    await includePokemons();
    loading.current = false;
  }, [includePokemons]);

  useEffect(() => {
    const get = async () => {
      await includePokemons(true);
      loading.current = false;
    };

    get();
  });

  return (
    <Container>
      <ListHeader />
      <Content>
        {pokemons.map(pokemon =>
          pokemon.hidden ? null : <Card key={pokemon.id} pokemon={pokemon} />,
        )}
      </Content>
      <button type="button" onClick={loadPokemons}>
        {pokemons.length >= 700
          ? 'Não é possível carregar mais'
          : 'Carregar mais'}
      </button>
    </Container>
  );
}

export default Home;
