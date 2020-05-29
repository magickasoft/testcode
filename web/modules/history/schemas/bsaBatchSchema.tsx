import * as React from 'react';
import { modelBsaBatch } from 'types/foundation';
import { DateTime } from 'components/DateTime';
import { HistoryFieldFormatter, HistoryFieldType } from 'modules/history/enums';
import { schemaKey } from '../schemaBuilder';
import { EntitySchema } from '../types/entitySchema';

export const BSABatchSchema: EntitySchema<modelBsaBatch> = {
  acknowledgments_key: schemaKey('Acknowledgments Key'),
  created_at: schemaKey('Created At', HistoryFieldFormatter.DateTime),
  ctrs_info: schemaKey('CTRs Info', undefined, HistoryFieldType.Array, {
    batch_id: schemaKey('Batch ID'),
    created_at: schemaKey('Created At', HistoryFieldFormatter.DateTime),
    ctr_id: schemaKey('CTR ID'),
    ctr_name: schemaKey('CTR Name'),
    ctr_status: schemaKey('CTR Status'),
    deleted_at: schemaKey('Deleted At', HistoryFieldFormatter.DateTime),
    id: schemaKey('ID'),
    seq_num: schemaKey('Seq Number'),
    updated_at: schemaKey('Updated At', HistoryFieldFormatter.DateTime)
  }),
  ctrx_pdf_key: schemaKey('CTRX Pdf Key'),
  deleted_at: schemaKey('Deleted At', HistoryFieldFormatter.DateTime),
  end_date: schemaKey('End Date', HistoryFieldFormatter.DateTime),
  filing_name: schemaKey('Filing Name'),
  id: schemaKey('ID'),
  organization_id: schemaKey('Organization ID'),
  record_count: schemaKey('Record Count'),
  start_date: schemaKey('Start Date', HistoryFieldFormatter.DateTime),
  status: schemaKey('Status'),
  tracking_id: schemaKey('Tracking ID'),
  type: schemaKey('Type'),
  updated_at: schemaKey('Updated At', HistoryFieldFormatter.DateTime),
  xml_key: schemaKey('XML Key')
};
