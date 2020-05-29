import { List } from 'immutable';
import { createReducer } from 'utils/redux';
import { MainModel } from 'components/Main/MainModel';
import { MAIN_TOGGLE_BAR } from './constants';
import { menuItems } from './data';

const mainInitialState = new MainModel({ barMinimized: false, menuItems: List(menuItems) });

export const mainReducer = createReducer({
  initialState: mainInitialState,
  actions: {
    [MAIN_TOGGLE_BAR]: (state) => state.set('barMinimized', !state.get('barMinimized'))
  }
});
