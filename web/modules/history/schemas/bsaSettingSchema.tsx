import * as React from 'react';
import { modelBsaSetting } from 'types/foundation';
import { DateTime } from 'components/DateTime';
import { HistoryFieldFormatter, HistoryFieldType } from 'modules/history/enums';
import { schemaKey } from '../schemaBuilder';
import { EntitySchema } from '../types/entitySchema';

export const BSASettingSchema: EntitySchema<modelBsaSetting> = {
  id: schemaKey('ID'),
  created_at: schemaKey('Created At', HistoryFieldFormatter.DateTime),
  deleted_at: schemaKey('Deleted At', HistoryFieldFormatter.DateTime),
  organization_id: schemaKey('Organization ID'),
  institution_info: schemaKey('Institution Info', undefined, HistoryFieldType.Object, {
    address: schemaKey('Address'),
    city: schemaKey('City'),
    contact_office: schemaKey('Contact Office'),
    country: schemaKey('Country'),
    dba: schemaKey('DBA'),
    ein: schemaKey('EIN'),
    federal_regulator: schemaKey('Federal Regulator'),
    id_type: schemaKey('ID Type'),
    id_number: schemaKey('ID Number'),
    legal_name: schemaKey('Legal Name'),
    phone: schemaKey('Phone'),
    phone_ext: schemaKey('Phone Ext'),
    state: schemaKey('State'),
    type: schemaKey('Type'),
    type_other: schemaKey('Type Other'),
    zip_code: schemaKey('Zip Code')
  }),
  transaction_locations_info: schemaKey('Transactions Locations Info', undefined, HistoryFieldType.Array, {
    address: schemaKey('Address'),
    city: schemaKey('City'),
    country: schemaKey('Country'),
    dba: schemaKey('DBA'),
    ein: schemaKey('EIN'),
    federal_regulator: schemaKey('Federal Regulator'),
    id: schemaKey('ID'),
    id_number: schemaKey('ID Number'),
    id_type: schemaKey('ID Type'),
    legal_name: schemaKey('Legal Name'),
    state: schemaKey('State'),
    type: schemaKey('Type'),
    type_other: schemaKey('Type Other'),
    zip_code: schemaKey('Zip Code')
  }),
  tellers_branch: schemaKey('Tellers Branch', (value) => JSON.stringify(value, null, 4)),
  transmitter_info: schemaKey('Transmitter Info', undefined, HistoryFieldType.Object, {
    city: schemaKey('City'),
    contact_name: schemaKey('Contact Name'),
    country: schemaKey('Country'),
    name: schemaKey('Name'),
    phone: schemaKey('Phone'),
    state: schemaKey('State'),
    street: schemaKey('Street'),
    tcc: schemaKey('TCC'),
    tin: schemaKey('TIN'),
    zip_code: schemaKey('Zip Code')
  }),
  updated_at: schemaKey('Updated At', HistoryFieldFormatter.DateTime)
};
