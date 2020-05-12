import { graphql } from 'react-apollo';
import { isFunc } from './checkTypes';

const call = (callBack, props) => (isFunc(callBack) ? callBack(props) : callBack);

const hoc = (query, { name, options = {} }) => (callBack = {}) => graphql(query, {
  name,
  options: (props) => ({
    ...call(options, props),
    ...call(callBack, props)
  })
});

const weekToFormat = (w) => (w.toString().length === 1 ? `0${w}` : w);
const yearToFormat = (y) => y.toString().substring(2, 4);

export {
  hoc,
  weekToFormat,
  yearToFormat
};
