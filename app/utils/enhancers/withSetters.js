import { compose } from 'recompose';
import withSetter from './withSetter';

const withSetters = (fields, validator) => {
  const args = fields.map(el => withSetter(el, '', validator));
  return compose.apply(this, args);
};

export default withSetters;
