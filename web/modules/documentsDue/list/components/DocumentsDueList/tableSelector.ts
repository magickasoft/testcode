import { uniqBy } from 'utils/common';

export const tableSelector = (data: any) => {
  if (!data) {
    return [];
  }
  const records = uniqBy(data.documentsDue.value.records, 'document_id');
  return records.map((record: any) => {
    const company = data.companies.value.records.find((i) => i.id === record.company_id);
    const license = data.licenses.value.records.find((i) => i.id === record.license_id);

    return {
      id: record.document_period_id,
      name: record.document_name,
      internal: record.internal,
      license: { name: company?.name, license: license?.name, licenseType: license?.subtype },
      frequency: record.frequency,
      endDate: record.end_date
    };
  });
};
