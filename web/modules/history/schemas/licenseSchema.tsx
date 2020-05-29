import * as React from 'react';
import { modelLicense } from 'types/foundation';
import { DateTime } from 'components/DateTime';
import { LicensePosTypeLabel, LicenseSubTypeLabel, LicenseTypeLabel } from 'components/Labels';
import { HistoryFieldFormatter } from 'modules/history/enums';
import { schemaKey } from '../schemaBuilder';
import { EntitySchema } from '../types/entitySchema';

export const LicenseSchema: EntitySchema<modelLicense> = {
  id: schemaKey('ID'),
  account_opening_date: schemaKey('Account Opening Date', HistoryFieldFormatter.DateTime),
  bank_account: schemaKey('Bank Account'),
  city: schemaKey('City'),
  city_tax: schemaKey('City Tax'),
  company_id: schemaKey('Company ID'),
  county_tax: schemaKey('County Tax'),
  created_at: schemaKey('Created At', HistoryFieldFormatter.DateTime),
  deleted_at: schemaKey('Deleted At', HistoryFieldFormatter.DateTime),
  expiration_date: schemaKey('Expiration Date', HistoryFieldFormatter.DateTime),
  internal_transfers: schemaKey('Internal Transfers', HistoryFieldFormatter.Boolean),
  issue_date: schemaKey('Issue Date', HistoryFieldFormatter.DateTime),
  license_number: schemaKey('License Number'),
  mj_retail_tax: schemaKey('MJ Retail Tax'),
  name: schemaKey('Name'),
  phone: schemaKey('Phone'),
  pos_type: schemaKey('POS Type', (value) => <LicensePosTypeLabel name={value} />),
  postal_code: schemaKey('Postal Code'),
  sf_external_id: schemaKey('SF External ID'),
  special_tax: schemaKey('Special Tax'),
  state: schemaKey('State'),
  state_tax: schemaKey('State Tax'),
  street_address: schemaKey('Street Address'),
  subtype: schemaKey('Subtype', (value) => <LicenseSubTypeLabel name={value} />),
  type: schemaKey('Type', (value) => <LicenseTypeLabel name={value} />),
  updated_at: schemaKey('Updated At', HistoryFieldFormatter.DateTime)
};
