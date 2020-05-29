import * as React from 'react';
import { modelDocumentPeriod } from 'types/foundation';
import { DateTime } from 'components/DateTime';
import { StatusLabel } from 'components/Labels';
import { HistoryFieldFormatter } from 'modules/history/enums';
import { schemaKey } from '../schemaBuilder';
import { EntitySchema } from '../types/entitySchema';

export const DocumentPeriodSchema: EntitySchema<modelDocumentPeriod> = {
  id: schemaKey('ID'),
  created_at: schemaKey('Created At', HistoryFieldFormatter.DateTime),
  deleted_at: schemaKey('Deleted At', HistoryFieldFormatter.DateTime),
  updated_at: schemaKey('Updated At', HistoryFieldFormatter.DateTime),
  delivered_at: schemaKey('Delivered At', HistoryFieldFormatter.DateTime),
  document_id: schemaKey('Document ID'),
  start_date: schemaKey('Start Date', HistoryFieldFormatter.DateTime),
  end_date: schemaKey('End Date', HistoryFieldFormatter.DateTime),
  is_legacy: schemaKey('Is Legacy', HistoryFieldFormatter.Boolean),
  next_created: schemaKey('Next Created', HistoryFieldFormatter.Boolean),
  notes: schemaKey('Notes'),
  status: schemaKey('Status', (value: any) => <StatusLabel name={value} />)
};
