import { createDeleteReducer } from 'utils/api/delete';
import {
  documentsFileDeleteActionsTypes,
  documentPeriodDeleteActionsTypes,
  documentDeleteActionsTypes
} from './actions';
import { DocumentsFileDeleteFilterModel, DocumentPeriodDeleteFilterModel, DocumentDeleteFilterModel } from './models';

export const documentsFileDeleteReducer = createDeleteReducer(
  documentsFileDeleteActionsTypes,
  new DocumentsFileDeleteFilterModel()
);

export const documentPeriodDeleteReducer = createDeleteReducer(
  documentPeriodDeleteActionsTypes,
  new DocumentPeriodDeleteFilterModel()
);

export const documentDeleteReducer = createDeleteReducer(documentDeleteActionsTypes, new DocumentDeleteFilterModel());
