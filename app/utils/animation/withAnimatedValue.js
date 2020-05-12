import { withState } from 'recompose';
import { Animated } from 'react-native';
import { toUpperFirst } from '../helpers/string';

export default (valueName, value) => withState(
  `${valueName}`,
  `set${toUpperFirst(valueName)}`,
  () => new Animated.Value(value)
);
