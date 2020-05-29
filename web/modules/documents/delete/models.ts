import { FormFieldModel, FormModel } from 'utils/form';

const documentsFileDeleteFilterModelFields = {
  id: new FormFieldModel(0)
};

const documentPeriodDeleteFilterModelFields = {
  id: new FormFieldModel(0)
};

const documentDeleteFilterModelFields = {
  id: new FormFieldModel(0)
};

export const DocumentsFileDeleteFilterModel = FormModel.Factory(documentsFileDeleteFilterModelFields, false);
export const DocumentPeriodDeleteFilterModel = FormModel.Factory(documentPeriodDeleteFilterModelFields, false);
export const DocumentDeleteFilterModel = FormModel.Factory(documentDeleteFilterModelFields, false);
