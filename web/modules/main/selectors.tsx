import { createSelector } from 'reselect';
import { MAIN_STORE_KEY_ID } from './constants';

export const mainSelector = (state) => state[MAIN_STORE_KEY_ID];

export const mainBarMinimizedSelector = (state) => mainSelector(state).get('barMinimized');

export const mainMenuItemsSelector = (state) => mainSelector(state).get('menuItems');

export const mainMenuItemsArraySelector = createSelector([mainMenuItemsSelector], (menuItems) => menuItems.toArray());
