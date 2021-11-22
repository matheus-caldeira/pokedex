import { useCallback, useRef } from 'react';

import { usePokemon } from '../../../../contexts/pokemon';

import search from '../../../../assets/images/search.svg';
import close from '../../../../assets/images/close.svg';

import { Container } from './styles';

function Search(): JSX.Element {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const interval = useRef<NodeJS.Timeout | null>(null);
  const { filterPokemonsByName } = usePokemon();

  const handleButton = useCallback(() => {
    if (!inputRef.current) return;
    inputRef.current.value = '';
    filterPokemonsByName('');
  }, [filterPokemonsByName]);

  const onChange = useCallback(() => {
    if (!inputRef.current) return;

    if (interval.current) clearTimeout(interval.current);

    const name = inputRef.current.value;
    interval.current = setTimeout(() => filterPokemonsByName(name), 500);
  }, [filterPokemonsByName]);

  return (
    <Container>
      <input
        id="search"
        ref={inputRef}
        type="text"
        placeholder=" "
        onChange={onChange}
      />
      <button type="button" onClick={handleButton}>
        <img src={close} alt="Icone para fechar pesquisa" />
      </button>
      <label htmlFor="search">
        <img src={search} alt="Icone de busca" />
        <p>Procurar</p>
      </label>
    </Container>
  );
}

export default Search;
