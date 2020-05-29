import { FormFieldModel, FormModel } from 'utils/form';

const documentsDetailsFilterModelFields = {
  id: new FormFieldModel(0)
};

const documentFileDetailsFilterModelFields = {
  id: new FormFieldModel(0)
};

const documentPeriodsFilterModelFields = {
  id: new FormFieldModel(),
  document_id: new FormFieldModel(),
  _options: new FormFieldModel()
};

const documentPeriodDetailsFilterModelFields = {
  id: new FormFieldModel(0)
};

const DocumentFileDownloadFilterModelFields = {
  id: new FormFieldModel(0)
};

export const DocumentFileDownloadFilterModel = FormModel.Factory(DocumentFileDownloadFilterModelFields);
export const DocumentsDetailsFilterModel = FormModel.Factory(documentsDetailsFilterModelFields, false);
export const DocumentFileDetailsFilterModel = FormModel.Factory(documentFileDetailsFilterModelFields, false);
export const DocumentPeriodsFilterModel = FormModel.Factory(documentPeriodsFilterModelFields, false);
export const DocumentPeriodDetailsFilterModel = FormModel.Factory(documentPeriodDetailsFilterModelFields, false);
