import moment from 'moment';
import { FormFieldModel, FormModel } from 'utils/form';

const companyFormFields = {
  id: new FormFieldModel(0),
  accountingSyncStatus: new FormFieldModel(null),
  active: new FormFieldModel(false),
  bankSyncStatus: new FormFieldModel(null),
  business_type: new FormFieldModel(null),
  cif: new FormFieldModel(null),
  city: new FormFieldModel(null),
  country: new FormFieldModel(null),
  customer_status: new FormFieldModel(null),
  dba: new FormFieldModel(null),
  description: new FormFieldModel(null),
  ein: new FormFieldModel(null),
  employees: new FormFieldModel(null),
  entity_type: new FormFieldModel(null),
  fax: new FormFieldModel(null),
  name: new FormFieldModel(null),
  state: new FormFieldModel(null),
  street: new FormFieldModel(null),
  stateFounded: new FormFieldModel(null),
  requiredApprovalsCount: new FormFieldModel(0),
  legal_name: new FormFieldModel(null),
  phone: new FormFieldModel(null),
  website: new FormFieldModel(null),
  postal_code: new FormFieldModel(null),
  organization_id: new FormFieldModel(0),
  dateFounded: new FormFieldModel(moment()),
  is_holding: new FormFieldModel(false),
  holding_id: new FormFieldModel(null),
  holding_group_companies_ids: new FormFieldModel(null),
  primaryDataSource: new FormFieldModel(null),
  sf_acc_id: new FormFieldModel(null),
  report_alerts_criteria: new FormFieldModel(null),
  lastBankSyncAt: new FormFieldModel(null),
  lastAccountingSyncAt: new FormFieldModel(null),
  lastManualDataUpdateAt: new FormFieldModel(null),
  hasAccountingPlatform: new FormFieldModel(null),
  reportedAccountingPlatform: new FormFieldModel(null),
  created_at: new FormFieldModel(null),
  updated_at: new FormFieldModel(null),
  deleted_at: new FormFieldModel(null)
};

export const CompanyFormModel = FormModel.Factory(companyFormFields);

export const ContactFormModel = FormModel.Factory({
  birthdate: new FormFieldModel(null),
  city: new FormFieldModel(''),
  country: new FormFieldModel(''),
  created_at: new FormFieldModel(null),
  deleted_at: new FormFieldModel(null),
  ein_ssn: new FormFieldModel(''),
  email: new FormFieldModel(''),
  entity_name: new FormFieldModel(''),
  first_name: new FormFieldModel(''),
  id: new FormFieldModel(0),
  is_documents: new FormFieldModel(false),
  is_financials: new FormFieldModel(false),
  last_name: new FormFieldModel(''),
  mobile_phone: new FormFieldModel(''),
  organization_id: new FormFieldModel(0),
  phone: new FormFieldModel(''),
  state: new FormFieldModel(''),
  street: new FormFieldModel(''),
  title: new FormFieldModel(''),
  updated_at: new FormFieldModel(null),
  zip_code: new FormFieldModel('')
});

export const CustomerFormModel = FormModel.Factory({
  address: new FormFieldModel(''),
  city: new FormFieldModel(''),
  company_id: new FormFieldModel(''),
  created_at: new FormFieldModel(null),
  deleted_at: new FormFieldModel(null),
  email: new FormFieldModel(''),
  external_id: new FormFieldModel(''),
  id: new FormFieldModel(0),
  name: new FormFieldModel(''),
  phone: new FormFieldModel(''),
  sf_external_id: new FormFieldModel(''),
  state: new FormFieldModel(''),
  updated_at: new FormFieldModel(null),
  zip_code: new FormFieldModel('')
});

export const VendorFormModel = FormModel.Factory({
  address: new FormFieldModel(''),
  city: new FormFieldModel(''),
  company_id: new FormFieldModel(''),
  created_at: new FormFieldModel(null),
  deleted_at: new FormFieldModel(null),
  email: new FormFieldModel(''),
  external_id: new FormFieldModel(''),
  id: new FormFieldModel(0),
  name: new FormFieldModel(''),
  phone: new FormFieldModel(''),
  sf_external_id: new FormFieldModel(''),
  state: new FormFieldModel(''),
  website: new FormFieldModel(''),
  updated_at: new FormFieldModel(null),
  zip_code: new FormFieldModel('')
});

export const AffiliatedFormModel = FormModel.Factory({
  child_company_id: new FormFieldModel(null),
  created_at: new FormFieldModel(null),
  deleted_at: new FormFieldModel(null),
  id: new FormFieldModel(0),
  notes: new FormFieldModel(''),
  parent_company_id: new FormFieldModel(null),
  sf_external_id: new FormFieldModel(null),
  updated_at: new FormFieldModel(null)
});
