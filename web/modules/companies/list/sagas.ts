import { createReadSaga } from 'utils/api/read';
import { companiesListActionsTypes, companiesListActions } from './actions';
import { companiesListApi } from './api';

export const companiesListSaga = createReadSaga(companiesListActionsTypes, companiesListActions, companiesListApi);
