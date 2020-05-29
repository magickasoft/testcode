import * as React from 'react';
import { modelInternalTransfer } from 'types/foundation';
import { DateTime } from 'components/DateTime';
import { StatusLabel } from 'components/Labels';
import { HistoryFieldFormatter } from 'modules/history/enums';
import { schemaKey } from '../schemaBuilder';
import { EntitySchema } from '../types/entitySchema';

export const InternalTransferHistorySchema: EntitySchema<modelInternalTransfer> = {
  id: schemaKey('ID'),
  amount: schemaKey('Amount', (value: any) => `$ ${value}`),
  approval_date: schemaKey('Approval Date'),
  approvals_count: schemaKey('Approvals Count'),
  created_at: schemaKey('Created At', HistoryFieldFormatter.DateTime),
  date: schemaKey('Date', HistoryFieldFormatter.DateTime),
  deleted_at: schemaKey('Deleted At', HistoryFieldFormatter.DateTime),
  export_id: schemaKey('Export ID'),
  manifest_number: schemaKey('Manifest Number'),
  notes: schemaKey('Notes'),
  recipient_license_id: schemaKey('Recipient License ID'),
  required_approvals_count: schemaKey('Required Approvals Count'),
  sender_license_id: schemaKey('Sender License ID'),
  sf_external_id: schemaKey('SF External ID'),
  status: schemaKey('Status', (value: any) => <StatusLabel name={value} />),
  updated_at: schemaKey('Updated At', HistoryFieldFormatter.DateTime)
};
