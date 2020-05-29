export const tableSelector = (data: any) => {
  if (!data) {
    return [];
  }

  return data.annualReview.value.records.map((record: any) => {
    const company = data.companies.value.records.find((i) => i.id === record.company_id);

    return {
      id: record.id,
      questionnaire: record.questionnaire,
      status: record.status,
      company: { name: company?.name, license: company?.phone, licenseType: company?.fax },
      updatedAt: record.updated_at,
      lastArDate: record.last_ar_date
    };
  });
};
