import moment from 'moment';

export const selector = (data: any) => {
  if (!data) {
    return [];
  }

  return data.periods.value.records.map((i) => ({
    id: i.id,
    period: `${moment(i.start_date).format('MM/DD/YYYY')} - ${moment(i.end_date).format('MM/DD/YYYY')}`,
    status: i.status,
    documentId: i.document_id,
    expirationDate: i.expiration_date
  }));
};
