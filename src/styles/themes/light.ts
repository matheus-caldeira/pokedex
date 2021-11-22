import { DefaultTheme } from 'styled-components';
import common from './common';

const light: DefaultTheme = {
  ...common,
  title: 'light',
  background: '#F7F7F7',
  primary: '#212121',
  secondary: '#FFFFFF',
  input: '#666666',
  border: '#E0E0E0',
};

export default light;
