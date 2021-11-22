import { CommonTheme } from 'styled-components';

const common: CommonTheme = {
  borderRadius: '0.5rem',
  spacing: {
    veryLarge: {
      size: '1.5rem',
      line: '2rem',
    },
    large: {
      size: '0.875rem',
      line: '1rem',
    },
    medium: {
      size: '0.75rem',
      line: '1rem',
    },
    regular: {
      size: '0.625rem',
      line: '1rem',
    },
    small: {
      size: '0.5rem',
      line: '0.75rem',
    },
  },
  pokemons: {
    borderRadius: '0.625rem',
    colors: {
      unknown: '#666666',
      rock: '#B69E31',
      ghost: '#70559B',
      steel: '#B7B9D0',
      water: '#6493EB',
      grass: '#74CB48',
      psychic: '#FB5584',
      ice: '#9AD6DF',
      dark: '#75574C',
      fairy: '#E69EAC',
      normal: '#AAA67F',
      fighting: '#C12239',
      flying: '#A891EC',
      poison: '#A43E9E',
      ground: '#DEC16B',
      bug: '#A7B723',
      fire: '#F57D31',
      electric: '#F9CF30',
      dragon: '#7037FF',
    },
  },
};

export default common;
