import { FormFieldModel, FormModel } from 'utils/form';

export const DocumentsFilesApprovalFilterModel = FormModel.Factory({
  company_id: new FormFieldModel(''),
  license_id: new FormFieldModel(''),
  _options: new FormFieldModel({
    filters: [
      {
        field: 'status',
        type: 'eq',
        value: 'new'
      }
    ],
    offset: 0,
    limit: 10
  })
});
