import { HistoryActionType, HistoryEntityType } from '../enums';

export interface HistoryRecord<T> {
  id: number;
  action: HistoryActionType;
  comment: string;
  created_at: Date;
  entity_id: number;
  entity_type: HistoryEntityType;
  organization_id: number;
  user_id: string;
  old: Partial<T>;
  new: Partial<T>;
}
