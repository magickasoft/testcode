import R from 'ramda';
import { compose, withHandlers, withState, withPropsOnChange } from 'recompose';
import { toUpperFirst } from '../helpers/string';

const none = BaseComponent => BaseComponent;

const getNames = stateName => {
  const upperStateName = toUpperFirst(stateName);

  return ({
    state: stateName,
    updater: `set${upperStateName}`,
    handler: `onChange${upperStateName}`,
    stateValidator: `isValid${upperStateName}`,
    updaterValidator: `toggleValid${upperStateName}`,
    handlerValidator: `onToggleValid${upperStateName}`,
  });
};

const withValidation = (names, initialState, validator) => compose(
  withState(
    names.stateValidator,
    names.updaterValidator,
    { isValid: initialState }
  ),
  withPropsOnChange([names.state], props => {
    const isValid = validator(props[names.state], props);

    props[names.updaterValidator](R.is(Object, isValid) ? isValid : { isValid });
  }),
);

const withSetter = (
  stateName,
  initialState = '',
  validator,
  middleware,
  isValidInitialState = false,
) => {
  const names = getNames(stateName);

  return compose(
    withState(names.state, names.updater, initialState),
    validator ? withValidation(names, isValidInitialState, validator) : none,
    withHandlers({
      [names.handler]: props => value => {
        const newValue = middleware ? middleware(value, props) : value;

        props[names.updater](newValue);
      },
    }),
  );
};

export default withSetter;
