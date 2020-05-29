import * as React from 'react';
import { modelBsaCIFSubject } from 'types/foundation';
import { DateTime } from 'components/DateTime';
import { BusinessTypeLabel } from 'components/Labels';
import { HistoryFieldFormatter } from 'modules/history/enums';
import { schemaKey } from '../schemaBuilder';
import { EntitySchema } from '../types/entitySchema';

export const BSACIFSubjectSchema: EntitySchema<modelBsaCIFSubject> = {
  address: schemaKey('Address'),
  alternate_name: schemaKey('Alternate Name'),
  attentions: schemaKey('Attentions'),
  birthdate: schemaKey('Birth Date', HistoryFieldFormatter.DateTime),
  branch_id: schemaKey('Branch ID'),
  business_type: schemaKey('Business Type', (value) => <BusinessTypeLabel name={value} />),
  cif: schemaKey('CIF'),
  city: schemaKey('City'),
  common_carrier: schemaKey('Common Carrier', HistoryFieldFormatter.Boolean),
  country: schemaKey('Country'),
  created_at: schemaKey('Created At', HistoryFieldFormatter.DateTime),
  email: schemaKey('Email'),
  entity_name: schemaKey('Entity Name'),
  first_name: schemaKey('First Name'),
  gender: schemaKey('Gender'),
  id: schemaKey('ID'),
  id_country: schemaKey('Country ID'),
  id_form: schemaKey('Form ID'),
  id_form_other: schemaKey('Form Other ID'),
  id_number: schemaKey('Number ID'),
  id_state: schemaKey('State ID'),
  last_name: schemaKey('Last Name'),
  middle_name: schemaKey('Middle Name'),
  naics_code: schemaKey('NAICS Code'),
  organization_id: schemaKey('Organization ID'),
  phone: schemaKey('Phone'),
  phone_ext: schemaKey('Phone Ext'),
  postal_code: schemaKey('Postal Code'),
  state: schemaKey('State'),
  suffix: schemaKey('Suffix'),
  tin: schemaKey('TIN'),
  tin_type: schemaKey('TIN Type'),
  updated_at: schemaKey('Updated At', HistoryFieldFormatter.DateTime)
};
