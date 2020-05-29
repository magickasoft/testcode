import * as React from 'react';
import { modelCompany } from 'types/foundation';
import { DateTime } from 'components/DateTime';
import { BusinessTypeLabel, CustomerStatusLabel, EntityTypeLabel } from 'components/Labels';
import { HistoryFieldFormatter } from '../enums';
import { EntitySchema } from '../types/entitySchema';
import { schemaKey } from '../schemaBuilder';

export const CompanyHistorySchema: EntitySchema<modelCompany> = {
  id: schemaKey('ID'),
  accountingSyncStatus: schemaKey('Accounting Sync Status'),
  active: schemaKey('Active', HistoryFieldFormatter.Boolean),
  bankSyncStatus: schemaKey('Bank Sync Status'),
  business_type: schemaKey('Business Type', (value) => <BusinessTypeLabel name={value} />),
  cif: schemaKey('CIF'),
  city: schemaKey('City'),
  country: schemaKey('Country'),
  created_at: schemaKey('Created At', HistoryFieldFormatter.DateTime),
  customer_status: schemaKey('Customer Status', (value) => <CustomerStatusLabel name={value} />),
  dateFounded: schemaKey('Date Founded', HistoryFieldFormatter.DateTime),
  dba: schemaKey('DBA'),
  deleted_at: schemaKey('Deleted At', HistoryFieldFormatter.DateTime),
  description: schemaKey('Description'),
  ein: schemaKey('EIN'),
  employees: schemaKey('Employees Count'),
  entity_type: schemaKey('Entity Type', (value) => <EntityTypeLabel name={value} />),
  fax: schemaKey('Fax'),
  hasAccountingPlatform: schemaKey('Has Accounting Platform', HistoryFieldFormatter.Boolean),
  holding_id: schemaKey('Holding ID'),
  is_holding: schemaKey('Is Holding', HistoryFieldFormatter.Boolean),
  lastAccountingSyncAt: schemaKey('Last Accounting Sync Date', HistoryFieldFormatter.DateTime),
  lastBankSyncAt: schemaKey('Last Bank Sync Date', HistoryFieldFormatter.DateTime),
  lastManualDataUpdateAt: schemaKey('Last Manual Update Date', HistoryFieldFormatter.DateTime),
  legal_name: schemaKey('Legal Name'),
  name: schemaKey('Name'),
  organization_id: schemaKey('Organization ID'),
  phone: schemaKey('Phone'),
  postal_code: schemaKey('Postal Code'),
  primaryDataSource: schemaKey('Primary Data Source'),
  report_alerts_criteria: schemaKey('Reports Alerts Criteria'),
  reportedAccountingPlatform: schemaKey('Reported Accounting Platforms'),
  reportedAccountingPlatformUpdateFrequency: schemaKey('Reported Accounting Platforms Update Frequency'),
  requiredApprovalsCount: schemaKey('Required Approvals Count'),
  sf_acc_id: schemaKey('SF Account ID'),
  state: schemaKey('State'),
  stateFounded: schemaKey('State Founded'),
  street: schemaKey('Street'),
  updated_at: schemaKey('Update Date', HistoryFieldFormatter.DateTime),
  website: schemaKey('Web Site')
};
