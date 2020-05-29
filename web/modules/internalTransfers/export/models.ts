import { FormFieldModel, FormModel } from 'utils/form';

const InternalTransfersExportFilterFields = {
  id: new FormFieldModel(''),
  status: new FormFieldModel('')
};

export const InternalTransfersExportFilterModel = FormModel.Factory(InternalTransfersExportFilterFields);

export const internalTranserExportFormFields = {
  created_at: new FormFieldModel(''),
  credit_file_s3_key: new FormFieldModel(''),
  debit_file_s3_key: new FormFieldModel(''),
  deleted_at: new FormFieldModel(''),
  id: new FormFieldModel(''),
  organization_id: new FormFieldModel(''),
  processing_date: new FormFieldModel(''),
  sf_external_id: new FormFieldModel(''),
  status: new FormFieldModel(''),
  updated_at: new FormFieldModel('')
};

export const InternalTranserExportFormModel = FormModel.Factory(internalTranserExportFormFields);

const ExportFileDownloadFilterModelFields = {
  internal_transfers_export_id: new FormFieldModel(0),
  file_type: new FormFieldModel('')
};

export const ExportFileDownloadFilterModel = FormModel.Factory(ExportFileDownloadFilterModelFields);
