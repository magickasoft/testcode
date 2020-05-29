import differenceInDays from 'date-fns/differenceInDays';

export const tableSelector = (firstAlert: number, lastAlert: number) => (data: any) => {
  if (!data) {
    return [];
  }

  const now = new Date();

  return data.documents.value.records.map((record) => {
    const firstAlerted = record.alerted_document_periods
      ? record.alerted_document_periods.filter(
          (i) =>
            differenceInDays(new Date(i.expiration_date), now) > lastAlert &&
            differenceInDays(new Date(i.expiration_date), now) < firstAlert
        )
      : [];

    const lastAlerted = record.alerted_document_periods
      ? record.alerted_document_periods.filter((i) => differenceInDays(new Date(i.expiration_date), now) < lastAlert)
      : [];

    return {
      id: record.id,
      name: record.name,
      internal: record.internal,
      company: record.company_name || '-',
      license: record.license_name || '-',
      frequency: record.frequency,
      expirationDate: record.expiration_date,
      firstAlerted: firstAlerted.length,
      lastAlerted: lastAlerted.length
    };
  });
};
