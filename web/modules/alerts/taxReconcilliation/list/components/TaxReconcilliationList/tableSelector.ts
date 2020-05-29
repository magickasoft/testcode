export const tableSelector = (data: any) => {
  if (!data) {
    return [];
  }

  return data.taxReconcilliation.value.records.map((record: any) => {
    const license = data.licenses.value.records.find((i) => i.id === record.license_id);
    const company = data.companies.value.records.find((i) => i.id === license.company_id);

    return {
      id: record.id,
      status: record.status,
      startDate: record.start_date,
      license: { name: company?.name, license: license?.name, licenseType: license?.subtype },
      updatedAt: record.updated_at
    };
  });
};
