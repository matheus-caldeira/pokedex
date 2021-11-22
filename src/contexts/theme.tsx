import { createContext, useCallback, useContext, useState } from 'react';
import {
  DefaultTheme,
  ThemeProvider as StyledProvider,
} from 'styled-components';

import themes from '../styles/themes';

const key = '@POKEDEX:theme';
interface IThemeContextData {
  theme: DefaultTheme;
  changeTheme(): void;
}

const ThemeContext = createContext<IThemeContextData>({} as IThemeContextData);

type IProps = {
  children: React.ReactNode;
};

function ThemeProvider({ children }: IProps): JSX.Element {
  const [theme, setTheme] = useState<DefaultTheme>(() => {
    const themeSaved = themes[localStorage.getItem(key) || 'light'];

    if (!themeSaved) return themes.light;

    return themeSaved;
  });

  const changeTheme = useCallback(() => {
    setTheme(state => {
      const type = state.title === 'light' ? 'dark' : 'light';
      localStorage.setItem(key, type);
      return themes[type] || themes.light;
    });
  }, []);

  return (
    <StyledProvider theme={theme}>
      <ThemeContext.Provider
        value={{
          theme,
          changeTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </StyledProvider>
  );
}

function useTheme(): IThemeContextData {
  const context = useContext(ThemeContext);

  if (!context) throw new Error('useTheme must be used within a ThemeProvider');

  return context;
}

export { useTheme, ThemeProvider };
