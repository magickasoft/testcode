import { createActions } from 'redux-actions';
import types from './types';

export const {
  persistMergeFilter,
} = createActions(
  types.PERSIST_MERGE_FILTER,
);

