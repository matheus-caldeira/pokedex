import { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { usePokemon } from '../../contexts/pokemon';

import { ShowHeader } from '../../components/Header';
import Type from '../../components/Type';
import Info from '../../components/Info';
import Stat from '../../components/Stat';

import IPokemon from '../../dtos/IPokemon';

import { Container, Content } from './styles';

import heightIcon from '../../assets/images/height.svg';
import weightIcon from '../../assets/images/weight.svg';

interface IShow {
  current?: IPokemon;
  back: number;
  next: number;
}

function Show(): JSX.Element {
  const { id } = useParams();
  const { pokemons, includeDescription } = usePokemon();
  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState<IShow>({ next: 0, back: 0 });

  const getDescription = useCallback(
    async (data: IPokemon) => {
      const pokemonWithDescription = await includeDescription(data);

      setPokemon(state => ({ ...state, current: pokemonWithDescription }));
    },
    [includeDescription],
  );

  useEffect(() => {
    const indexPokemon = pokemons.findIndex(
      pokemonIndex => pokemonIndex.id === Number(id),
    );

    if (indexPokemon === -1) navigate('/');

    const back = pokemons[indexPokemon - 1]?.id || 0;
    const next = pokemons[indexPokemon + 1]?.id || 0;
    const current = pokemons[indexPokemon];

    setPokemon({
      back,
      next,
      current,
    });

    if (current && !current.description) getDescription(current);
  }, [getDescription, id, navigate, pokemons]);

  const abilities = useMemo(() => {
    if (!pokemon.current) return [];
    return pokemon.current.abilities.map(ability => ability.ability.name);
  }, [pokemon]);

  if (!pokemon.current) return <></>;

  return (
    <Container pokemon-type={pokemon.current.types[0].type.name}>
      <div className="background" />
      <ShowHeader
        id={pokemon.current.id}
        name={pokemon.current.name}
        image={pokemon.current.image}
        next={pokemon.next}
        back={pokemon.back}
      />
      <Content>
        <div>
          {pokemon.current.types.map(pokemonType => (
            <Type
              key={pokemonType.type.name}
              typeName={pokemonType.type.name}
            />
          ))}
        </div>
        <h2>About</h2>
        <div>
          <Info
            infos={[`${pokemon.current.weight} kg`]}
            name="weight"
            icon={weightIcon}
          />
          <hr />
          <Info
            infos={[`${pokemon.current.height} m`]}
            name="height"
            icon={heightIcon}
          />
          <hr />
          <Info infos={abilities} name="weight" />
        </div>
        <p>{pokemon.current.description}</p>
        <h2>Base Stats</h2>
        <div>
          {pokemon.current.stats.map(stat => (
            <Stat key={stat.stat.name} stat={stat} />
          ))}
        </div>
      </Content>
    </Container>
  );
}

export default Show;
