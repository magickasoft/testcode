import { Navigation } from 'react-native-navigation';

import * as actions from './actions';
import { restApi } from '../../services';
import { errOperations } from '../error';

const setStay = reviewPlace => async dispatch => {
  dispatch(actions.spotToggleLoading());

  try {
    await restApi.setStay(reviewPlace);

    dispatch(actions.spotToggleLoading());
    await Navigation.dismissAllModals();
  } catch (err) {
    dispatch(actions.spotToggleLoading());
    dispatch(errOperations.errSetSpot(err));
  }
};

export default {
  setStay,
};
