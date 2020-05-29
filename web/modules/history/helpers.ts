import { HistoryActionType, HistoryEntityType } from './enums';

export const getPathByEntityType = (type?: HistoryEntityType) => {
  if (!type) {
    return 'main-list';
  }

  switch (type) {
    case HistoryEntityType.BsaBatch:
      return 'bsa-batch';
    case HistoryEntityType.BsaCIFSubject:
      return 'bsa-cif-subject';
    case HistoryEntityType.BsaCtr:
      return 'bsa-ctr';
    case HistoryEntityType.BsaCtrBatch:
      return 'bsa-ctr-batch';
    case HistoryEntityType.BsaDDASubject:
      return 'bsa-dda-subject';
    case HistoryEntityType.BsaSetting:
      return 'bsa-setting';
    case HistoryEntityType.Company:
      return 'company';
    case HistoryEntityType.Document:
      return 'document';
    case HistoryEntityType.DocumentFile:
      return 'document-file';
    case HistoryEntityType.DocumentPeriod:
      return 'document-period';
    case HistoryEntityType.DocumentTemplate:
      return 'document-template';
    case HistoryEntityType.InternalTransfer:
      return 'internal-transfer';
    case HistoryEntityType.License:
      return 'license';
    default:
      throw new Error('"getPathByEntityType" received Unknown entity type.');
  }
};

export const entityTypesDictionary = [
  { value: HistoryEntityType.BsaBatch, label: 'BSA Batch' },
  { value: HistoryEntityType.BsaCIFSubject, label: 'BSA CIF Subject' },
  { value: HistoryEntityType.BsaCtr, label: 'BSA CTR' },
  // { value: HistoryEntityType.BsaCtrBatch, label: 'BSA CTR Batch' },
  // { value: HistoryEntityType.BsaDDASubject, label: 'BSA DDA Subject' },
  { value: HistoryEntityType.BsaSetting, label: 'BSA Setting' },
  { value: HistoryEntityType.Company, label: 'Company' },
  { value: HistoryEntityType.Document, label: 'Document' },
  { value: HistoryEntityType.DocumentFile, label: 'Document File' },
  { value: HistoryEntityType.DocumentPeriod, label: 'Document Period' },
  { value: HistoryEntityType.DocumentTemplate, label: 'Document Template' },
  { value: HistoryEntityType.InternalTransfer, label: 'Internal Transfer' },
  { value: HistoryEntityType.License, label: 'License' }
];

export const getNameByEntityType = (type: HistoryEntityType) => {
  switch (type) {
    case HistoryEntityType.BsaBatch:
      return 'BSA batch';
    case HistoryEntityType.BsaCIFSubject:
      return 'BSA CIF Subject';
    case HistoryEntityType.BsaCtr:
      return 'BSA CTR';
    case HistoryEntityType.BsaCtrBatch:
      return 'BSA CTR Batch';
    case HistoryEntityType.BsaDDASubject:
      return 'BSA DDA Subject';
    case HistoryEntityType.BsaSetting:
      return 'BSA Setting';
    case HistoryEntityType.Company:
      return 'Company';
    case HistoryEntityType.Document:
      return 'Document';
    case HistoryEntityType.DocumentFile:
      return 'Document File';
    case HistoryEntityType.DocumentPeriod:
      return 'Document Period';
    case HistoryEntityType.DocumentTemplate:
      return 'Document Template';
    case HistoryEntityType.InternalTransfer:
      return 'Internal Transfer';
    case HistoryEntityType.License:
      return 'License';
    default:
      throw new Error('"getPathByEntityType" received Unknown entity type.');
  }
};

const getHistoryActionLabel = (type: HistoryActionType) => {
  switch (type) {
    case HistoryActionType.Create:
      return 'created';
    case HistoryActionType.Update:
      return 'updated';
    case HistoryActionType.Delete:
      return 'deleted';
    default:
      throw new Error('"getHistoryActionLabel" received Unknown action type.');
  }
};

export const getMainActionLabel = (entityType: HistoryEntityType, actionType: HistoryActionType) =>
  `${getNameByEntityType(entityType)} was ${getHistoryActionLabel(actionType)}`;
