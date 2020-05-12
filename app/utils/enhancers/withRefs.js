import { compose, withHandlers } from 'recompose';

/**
 * @param setterName
 * @returns props {
 * setterName: func set refs
 * getRefs func return all ref
 * getRef func return ref
 * }
 */

const withRefs = (
  setterName = 'setIdRef',
) => compose(
  withHandlers(() => {
    let refs = {};
    return {
      [setterName]: () => (ref, inputId) => {
        refs = {
          ...refs,
          [inputId]: !!ref && ref,
        };
      },
      getRefs: () => () => refs,
      getRef: () => refName => !!refs[refName] && refs[refName],
    };
  }),
);


export default withRefs;
