import * as React from 'react';
import { modelDocument } from 'types/foundation';
import { DateTime } from 'components/DateTime';
import { FrequencyLabel, StartDateTypeLabel } from 'components/Labels';
import { HistoryFieldFormatter } from 'modules/history/enums';
import { schemaKey } from '../schemaBuilder';
import { EntitySchema } from '../types/entitySchema';

export const DocumentSchema: EntitySchema<modelDocument> = {
  id: schemaKey('ID'),
  company_id: schemaKey('Company ID'),
  created_at: schemaKey('Created At', HistoryFieldFormatter.DateTime),
  updated_at: schemaKey('Updated At', HistoryFieldFormatter.DateTime),
  deleted_at: schemaKey('Deleted At', HistoryFieldFormatter.DateTime),
  document_template_id: schemaKey('Document Template ID'),
  expiration_delay_days: schemaKey('Expiration Delay Days'),
  frequency: schemaKey('Frequency', (value: any) => <FrequencyLabel name={value} />),
  initialized: schemaKey('Initialized', HistoryFieldFormatter.Boolean),
  internal: schemaKey('Internal', HistoryFieldFormatter.Boolean),
  license_id: schemaKey('License ID'),
  name: schemaKey('Name'),
  start_date_type: schemaKey('Start Date Type', (value: string) => <StartDateTypeLabel name={value} />)
};
