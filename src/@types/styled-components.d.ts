import 'styled-components';

declare module 'styled-components' {
  interface ThemeFont {
    line: string;
    size: string;
  }
  interface CommonTheme {
    borderRadius: string;
    spacing: {
      veryLarge: ThemeFont;
      large: ThemeFont;
      medium: ThemeFont;
      regular: ThemeFont;
      small: ThemeFont;
    };
    pokemons: {
      borderRadius: string;
      colors: {
        rock: string;
        ghost: string;
        steel: string;
        water: string;
        grass: string;
        psychic: string;
        ice: string;
        dark: string;
        fairy: string;
        normal: string;
        fighting: string;
        flying: string;
        poison: string;
        ground: string;
        bug: string;
        fire: string;
        electric: string;
        dragon: string;
        unknown: string;
        [t: string]: string;
      };
    };
  }
  export interface DefaultTheme extends CommonTheme {
    title: string;
    background: string;
    primary: string;
    secondary: string;
    input: string;
    border: string;
  }
}
