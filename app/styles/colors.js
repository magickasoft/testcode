import theme from '../services/theme';
import themes from './themes';

theme.init(themes, 1);

export const chartPalette = {
  blue500: '#1c31d5',
  darkSalmon500: '#E9967A',
  orange500: '#f39c12',
  salmon500: '#FC714E',
  grey500: '#D7DFE3',
  lightBlue500: '#03A9F4',
  pink500: '#E91E63',
  lime500: '#CDDC39',
  cyan500: '#00BCD4',
  purple500: '#933DA8',
  yellow500: '#F5C94E',
  blueGray500: '#607D8B',
};


export default theme.get();
