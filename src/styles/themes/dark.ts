import { DefaultTheme } from 'styled-components';
import common from './common';

const dark: DefaultTheme = {
  ...common,
  title: 'dark',
  background: '#212121',
  primary: '#FFFFFF',
  secondary: '#F7F7F7',
  input: '#666666',
  border: '#E0E0E0',
};

export default dark;
