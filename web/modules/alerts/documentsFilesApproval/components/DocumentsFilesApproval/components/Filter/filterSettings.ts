import { DocumentsFilesApprovalFilterModel } from '../../../../models';
import { Filter } from './Filter';

export const filterSettings = () => ({
  component: Filter,
  value: new DocumentsFilesApprovalFilterModel(),
  onChange: (previous, current, data) => ({
    ...current,
    license_id: previous.company_id !== current.company_id ? null : current.license_id,
    _options: {
      filters: [
        {
          field: 'status',
          type: 'eq',
          value: 'new'
        },
        (() => {
          if (!current.company_id) {
            return null;
          }

          const documentsIds = data.documents.value.records
            .filter((i) => i.company_id === current.company_id)
            .map((i) => i.id);

          const periodsIds = data.periods.value.records
            .filter((i) => documentsIds.indexOf(i.document_id) !== -1)
            .map((i) => i.id);

          return {
            field: 'document_period_id',
            type: 'in',
            value: periodsIds
          };
        })(),
        (() => {
          if (!current.license_id) {
            return null;
          }

          const documentsIds = data.documents.value.records
            .filter((i) => i.license_id === current.license_id)
            .map((i) => i.id);

          const periodsIds = data.periods.value.records
            .filter((i) => documentsIds.indexOf(i.document_id) !== -1)
            .map((i) => i.id);

          return {
            field: 'document_period_id',
            type: 'in',
            value: periodsIds
          };
        })()
      ].filter(Boolean)
    }
  })
});
