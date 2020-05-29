import * as React from 'react';
import { modelDocumentFile } from 'types/foundation';
import { DateTime } from 'components/DateTime';
import { StatusLabel } from 'components/Labels';
import { HistoryFieldFormatter } from 'modules/history/enums';
import { schemaKey } from '../schemaBuilder';
import { EntitySchema } from '../types/entitySchema';

export const DocumentFileSchema: EntitySchema<modelDocumentFile> = {
  created_at: schemaKey('Created At', HistoryFieldFormatter.DateTime),
  deleted_at: schemaKey('Deleted At', HistoryFieldFormatter.DateTime),
  document_period_id: schemaKey('Document ID'),
  id: schemaKey('ID'),
  name: schemaKey('Name'),
  notes: schemaKey('Notes'),
  s3_key: schemaKey('S3 Key'),
  status: schemaKey('Status', (value: any) => <StatusLabel name={value} />),
  updated_at: schemaKey('Updated At', HistoryFieldFormatter.DateTime)
};
