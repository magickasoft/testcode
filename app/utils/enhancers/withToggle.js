import { compose, withHandlers, withState } from 'recompose';

export default (
  stateName,
  updaterName,
  handlerName,
  intialState = false,
) => compose(
  withState(stateName, updaterName, intialState),
  withHandlers({
    [handlerName]: props => () => {
      props[updaterName](!props[stateName]);
    },
  }),
);
