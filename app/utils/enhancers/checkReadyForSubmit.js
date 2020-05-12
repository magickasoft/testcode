import R from 'ramda';
import { withProps } from 'recompose';
import { toUpperFirst } from '../helpers/string';

export default (
  fields,
) => withProps(props => ({
  isReadyToSubmit: R.isEmpty(fields.filter(fieldName => {
    const upperStateName = toUpperFirst(fieldName);
    const isValidStateName = `isValid${upperStateName}`;

    return !R.pathOr(true, [isValidStateName, 'isValid'], props);
  })),
}));

