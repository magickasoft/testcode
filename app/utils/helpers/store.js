import R from 'ramda';

const merge = (callBack) => (state, action) => {
  const entities = R.type(callBack) === 'Function'
    ? callBack(state, action)
    : callBack;

  return {
    ...state,
    ...entities
  };
};

const tryCatch = (tryer, catcher = console.log) => async (dispatch) => {
  // eslint-disable-line
  try {
    await tryer(dispatch);
  } catch (err) {
    catcher(err, dispatch);
  }
};


export { merge, tryCatch };
