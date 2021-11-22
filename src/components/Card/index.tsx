import IPokemon from '../../dtos/IPokemon';
import { Container, ImageContent, NameContent } from './styles';

type CardProps = {
  pokemon: IPokemon;
};

function Card({ pokemon }: CardProps): JSX.Element {
  return (
    <Container pokemonType={pokemon.types[0].type.name}>
      <ImageContent pokemonType={pokemon.types[0].type.name}>
        <p>#{String(pokemon.id).padStart(3, '0')}</p>
        <img src={pokemon.image} alt={pokemon.name} />
      </ImageContent>
      <NameContent>
        <p>{pokemon.name}</p>
      </NameContent>
    </Container>
  );
}

export default Card;
