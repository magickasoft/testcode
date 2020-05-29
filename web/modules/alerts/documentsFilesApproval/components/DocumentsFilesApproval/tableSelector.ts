export const tableSelector = (data: any) => {
  if (!data) {
    return [];
  }

  return data.files.value.records.map((record) => {
    const period = data.periods.value.records.find((i) => i.id === record.document_period_id);
    const document = data.documents.value.records.find((i) => i.id === period?.document_id);
    const company = data.companies.value.records.find((i) => i.id === document?.company_id);
    const license = data.licenses.value.records.find((i) => i.id === document?.license_id);

    return {
      id: record.id,
      name: record.name,
      documentName: document?.name || '0',
      companyName: company?.name || '',
      licenseName: license?.name || '',
      uploadedAt: record.created_at
    };
  });
};
