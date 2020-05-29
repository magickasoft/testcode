import { createWriteReducer } from 'utils/api';
import { createDeleteReducer } from 'utils/api/delete/index';
import {
  companyEditActionTypes,
  contactFormActionTypes,
  customerDeletionActionTypes,
  customerFormActionTypes,
  vendorDeletionActionTypes,
  vendorFormActionTypes,
  affiliatedFormActionTypes,
  affiliatedDeletionActionTypes
} from './actions';
import { CompanyFormModel, ContactFormModel, CustomerFormModel, VendorFormModel, AffiliatedFormModel } from './models';

export const companyEditReducer = createWriteReducer(companyEditActionTypes, new CompanyFormModel());
export const contactEditReducer = createWriteReducer(contactFormActionTypes, new ContactFormModel());
export const customerEditReducer = createWriteReducer(customerFormActionTypes, new CustomerFormModel());
export const customerDeletionReducer = createDeleteReducer(customerDeletionActionTypes, new CustomerFormModel());
export const vendorEditReducer = createWriteReducer(vendorFormActionTypes, new VendorFormModel());
export const vendorDeletionReducer = createDeleteReducer(vendorDeletionActionTypes, new VendorFormModel());
export const affiliatedEditReducer = createWriteReducer(affiliatedFormActionTypes, new AffiliatedFormModel());
export const affiliatedDeletionReducer = createDeleteReducer(affiliatedDeletionActionTypes, new AffiliatedFormModel());
