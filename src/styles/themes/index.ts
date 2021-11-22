import { DefaultTheme } from 'styled-components';

import light from './light';
import dark from './dark';

type Themes = {
  light: DefaultTheme;
  dark: DefaultTheme;
  [t: string]: DefaultTheme;
};

const themes: Themes = {
  light,
  dark,
};

export default themes;
