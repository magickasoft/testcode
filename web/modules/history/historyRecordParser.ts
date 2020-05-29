import { renderToString } from 'react-dom/server';
import flattenDeep from 'lodash/flattenDeep';
import { HistoryActionType, HistoryEntityType, HistoryFieldType } from 'modules/history/enums';
import { EntitySchemaKey, HistoryRecord } from './types';
import {
  CompanyHistorySchema,
  CTRSchema,
  DocumentPeriodSchema,
  DocumentSchema,
  DocumentFileSchema,
  InternalTransferHistorySchema,
  LicenseSchema,
  BSASettingSchema,
  BSABatchSchema,
  BSACIFSubjectSchema,
  DocumentTemplateSchema
} from './schemas';

const getSchemaByType = (type: HistoryEntityType) => {
  switch (type) {
    case HistoryEntityType.InternalTransfer:
      return InternalTransferHistorySchema;
    case HistoryEntityType.Company:
      return CompanyHistorySchema;
    case HistoryEntityType.Document:
      return DocumentSchema;
    case HistoryEntityType.DocumentPeriod:
      return DocumentPeriodSchema;
    case HistoryEntityType.DocumentTemplate:
      return DocumentTemplateSchema;
    case HistoryEntityType.DocumentFile:
      return DocumentFileSchema;
    case HistoryEntityType.License:
      return LicenseSchema;
    case HistoryEntityType.BsaCtr:
      return CTRSchema;
    case HistoryEntityType.BsaSetting:
      return BSASettingSchema;
    case HistoryEntityType.BsaBatch:
      return BSABatchSchema;
    case HistoryEntityType.BsaCIFSubject:
      return BSACIFSubjectSchema;
    default:
      throw new Error(`"getSchemaByType" received unknown schema name ${type}.`);
  }
};

const getFieldDetails = (schemaField: EntitySchemaKey<any>, rawNewValue: any, rawOldValue: any) => {
  const oldValue = schemaField.formatter ? schemaField.formatter(rawOldValue) : rawOldValue;
  const newValue = schemaField.formatter ? schemaField.formatter(rawNewValue) : rawNewValue;

  if (schemaField.type === HistoryFieldType.Primitive) {
    if ((rawOldValue || rawNewValue) && rawNewValue !== rawOldValue) {
      return [
        {
          rawNewValue,
          rawOldValue,
          oldValue,
          newValue,
          name: schemaField.friendlyName,
          actionLabel: schemaField.actionLabelsTemplates[HistoryActionType.Update]
            .replace('%s', oldValue ? renderToString(oldValue) : '""')
            .replace('%s', newValue ? renderToString(newValue) : '""')
        }
      ];
    }

    return [];
  }

  if (schemaField.type === HistoryFieldType.Object) {
    const fieldsDetails = Object.keys(schemaField.shape)
      .map((key) =>
        getFieldDetails(
          schemaField.shape[key],
          typeof rawNewValue !== 'undefined' ? rawNewValue[key] : undefined,
          typeof rawOldValue !== 'undefined' ? rawOldValue[key] : undefined
        )
      )
      .filter((i) => i.length);

    return flattenDeep<any>(fieldsDetails).map((item) => ({
      ...item,
      actionLabel: `<b>${schemaField.friendlyName} / </b> ${item.actionLabel}`
    }));
  }

  if (schemaField.type === HistoryFieldType.Array) {
    if (!rawOldValue && !rawNewValue) {
      return [];
    }

    let result = [];

    for (let i = 0; i < rawNewValue.length; i += 1) {
      const fieldsDetails = Object.keys(schemaField.shape)
        .map((key) =>
          getFieldDetails(
            schemaField.shape[key],
            typeof rawNewValue[i] !== 'undefined' ? rawNewValue[i][key] : undefined,
            typeof rawOldValue[i] !== 'undefined' ? rawOldValue[i][key] : undefined
          )
        )
        .filter((i) => i.length);

      result = result.concat(
        flattenDeep<any>(fieldsDetails).map((item) => ({
          ...item,
          actionLabel: `<b>${schemaField.friendlyName} (${i + 1}) / </b> ${item.actionLabel}`
        }))
      );
    }

    return result;
  }

  return [];
};

export const parseHistoryRecord = <T>(item: HistoryRecord<T>, type: HistoryEntityType) => {
  const schema = getSchemaByType(type);

  if (item.action === HistoryActionType.Create || item.action === HistoryActionType.Update) {
    return flattenDeep(Object.keys(schema).map((key) => getFieldDetails(schema[key], item.new[key], item.old[key])));
  }

  return null;
};
