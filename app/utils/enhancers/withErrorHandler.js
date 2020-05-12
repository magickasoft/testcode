import { withHandlers, compose } from 'recompose';
import R from 'ramda';

const withErrorHandler = (
  errorsList,
  errorPropName = 'error',
  errorHandlerName = 'getError',
) => compose(
  withHandlers({
    [errorHandlerName]: props => (field) => {
      const error = props[errorPropName];
      const err = R.pathOr(error, ['message'], error);
      const errField = R.pathOr(null, [err, 'field'], errorsList);
      const errMessage = R.pathOr(null, [err, 'message'], errorsList);

      if (errField === field) {
        return errMessage;
      }
      return null;
    },
  }),
);

export default withErrorHandler;
