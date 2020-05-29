import { createReadSaga } from 'utils/api/read';
import { documentsDueActions, documentsDueActionTypes } from './actions';
import { documentsDueApi } from './api';

export const documentsDueSaga = createReadSaga(documentsDueActionTypes, documentsDueActions, documentsDueApi);
