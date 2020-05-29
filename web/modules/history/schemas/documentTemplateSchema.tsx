import * as React from 'react';
import { modelDocumentTemplate } from 'types/foundation';
import { DateTime } from 'components/DateTime';
import { FrequencyLabel, StartDateTypeLabel } from 'components/Labels';
import { HistoryFieldFormatter } from 'modules/history/enums';
import { schemaKey } from '../schemaBuilder';
import { EntitySchema } from '../types/entitySchema';

export const DocumentTemplateSchema: EntitySchema<modelDocumentTemplate> = {
  active: schemaKey('Active', HistoryFieldFormatter.Boolean),
  ancillary: schemaKey('Ancillary', HistoryFieldFormatter.Boolean),
  corporation: schemaKey('Corporation', HistoryFieldFormatter.Boolean),
  created_at: schemaKey('Created At', HistoryFieldFormatter.DateTime),
  deleted_at: schemaKey('Deleted At', HistoryFieldFormatter.DateTime),
  expiration_delay_days: schemaKey('Expiration Delay Days'),
  frequency: schemaKey('Frequency', (value: any) => <FrequencyLabel name={value} />),
  hemp: schemaKey('Hemp', HistoryFieldFormatter.Boolean),
  id: schemaKey('ID'),
  internal: schemaKey('Internal', HistoryFieldFormatter.Boolean),
  investment: schemaKey('Investment', HistoryFieldFormatter.Boolean),
  level: schemaKey('Level'),
  license_dispensary: schemaKey('License Dispensary', HistoryFieldFormatter.Boolean),
  license_grower: schemaKey('License Grower', HistoryFieldFormatter.Boolean),
  license_medical: schemaKey('License Medical', HistoryFieldFormatter.Boolean),
  license_processor: schemaKey('License Processor', HistoryFieldFormatter.Boolean),
  license_recreational: schemaKey('License Recreational', HistoryFieldFormatter.Boolean),
  llc: schemaKey('LLC', HistoryFieldFormatter.Boolean),
  mrb: schemaKey('MRB', HistoryFieldFormatter.Boolean),
  mrb_related: schemaKey('MRB Related', HistoryFieldFormatter.Boolean),
  name: schemaKey('Name'),
  organization_id: schemaKey('Organization ID'),
  partnership: schemaKey('Partnership', HistoryFieldFormatter.Boolean),
  sole_proprietor: schemaKey('Sole Proprietor', HistoryFieldFormatter.Boolean),
  start_date_type: schemaKey('Start Date Type', (value: string) => <StartDateTypeLabel name={value} />),
  type: schemaKey('Type'),
  updated_at: schemaKey('Updated At', HistoryFieldFormatter.DateTime)
};
