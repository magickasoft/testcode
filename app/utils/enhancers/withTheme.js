import {
  compose,
  getContext,
  withProps,
} from 'recompose';
import T from 'prop-types';

import { isFunc } from '../helpers/checkTypes';

const createTheme = (colors, style) => {
  const cacheKey = `${JSON.stringify(colors)}${style}`;

  if (!createTheme.cache[cacheKey]) {
    createTheme.cache[cacheKey] = { colors };

    if (isFunc(style)) {
      createTheme.cache[cacheKey].s = style(colors);
    }
  }

  return createTheme.cache[cacheKey];
};

createTheme.cache = {};

const enhance = style => compose(
  getContext({ colorsTheme: T.object }),
  withProps(props => ({
    theme: createTheme(props.colorsTheme, style),
  })),
);

export default enhance;
