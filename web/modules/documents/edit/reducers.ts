import { createWriteReducer } from 'utils/api/write';
import { documentFileFormActionTypes, documentPeriodFormActionTypes, documentFormActionTypes } from './actions';
import { DocumentPeriodFormModel, DocumentFileFormModel, DocumentFormModel } from './models';

export const documentPeriodFormReducer = createWriteReducer(
  documentPeriodFormActionTypes,
  new DocumentPeriodFormModel()
);

export const documentFileFormReducer = createWriteReducer(documentFileFormActionTypes, new DocumentFileFormModel());

export const documentFormReducer = createWriteReducer(documentFormActionTypes, new DocumentFormModel());
