import { FormFieldModel, FormModel } from 'utils/form';

const InternalTransfersFilterFields = {
  status: new FormFieldModel(''),
  dateFrom: new FormFieldModel(null),
  dateTo: new FormFieldModel(null),
  sender_company_id: new FormFieldModel(''),
  sender_license_id: new FormFieldModel(''),
  recipient_company_id: new FormFieldModel(''),
  recipient_license_id: new FormFieldModel('')
};

export const InternalTransfersFilterModel = FormModel.Factory(InternalTransfersFilterFields);
