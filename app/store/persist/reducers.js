import { handleActions } from 'redux-actions';
import types from './types';
import { merge } from '../../utils/helpers/store';
import { filter } from '../../constants';

const initFilter = {
  // offersDeals: false,
  // virtualBusiness: false,
  // category1: false,
  // category2: false,
  // freelancerFriendly: false,
  sortBy: filter.sortBy.CLOSEST,
  // ownership: 'Score',
  // slider: 0.2,
  offersDeals: false,
  rewardsProgram: false,
  freelancerFriendly: false,
  maxDistance: filter.distance.max,
  category: [1, 2, 3, 4, 5, 6, 7, 8],
};

const initialState = {
  initFilters: {
    spotList: { ...initFilter },
    map: { ...initFilter },
  },
  filters: {
    spotList: { ...initFilter },
    map: { ...initFilter },
  },
};

const appReducer = handleActions(
  {
    [types.PERSIST_MERGE_FILTER]: merge((state, action) => ({
      filters: {
        ...state.filters,
        ...action.payload,
      },
    })),
  },
  initialState,
);

export default appReducer;
