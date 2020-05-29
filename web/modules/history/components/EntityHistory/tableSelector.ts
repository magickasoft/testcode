import { HistoryRecord } from '../../types';
import { parseHistoryRecord } from '../../historyRecordParser';

export const tableSelector = <T>(data: any): HistoryRecord<T>[] => {
  const records = data?.main?.value?.records || [];

  return records.map((record: HistoryRecord<T>) => ({
    ...record,
    details: parseHistoryRecord<T>(record, record.entity_type)
  }));
};
