import { DOCUMENTS_LIST_PAGE_PATH } from 'modules/documents/list';
import { COMPANIES_LIST_PATH } from 'modules/companies/list';
import { USERS_LIST_PAGE_PATH } from 'modules/users/list';
import { HISTORY_LIST_PAGE_PATH } from 'modules/history';
import { MAIN_ALERTS_PATH, MAIN_APP_SETTINGS_PATH, MAIN_INTERNAL_TRANSFERS_PATH } from './constants';

export const menuItems = [
  {
    to: COMPANIES_LIST_PATH,
    children: 'Relationships',
    icon: 'group'
  },
  {
    to: MAIN_ALERTS_PATH,
    children: 'Alerts',
    icon: 'bell'
  },
  {
    to: DOCUMENTS_LIST_PAGE_PATH,
    children: 'Documents',
    icon: 'clock'
  },
  {
    to: MAIN_INTERNAL_TRANSFERS_PATH,
    children: 'Internal Transfers',
    icon: 'exchange'
  },
  {
    to: USERS_LIST_PAGE_PATH,
    children: 'Users',
    icon: 'users'
  },
  {
    to: HISTORY_LIST_PAGE_PATH,
    children: 'Audit',
    icon: 'audit'
  },
  {
    to: MAIN_APP_SETTINGS_PATH,
    children: 'App Settings',
    icon: 'settings'
  }
];
