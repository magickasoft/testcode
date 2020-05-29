import { EntitySchema } from 'modules/history/types/entitySchema';
import { HistoryActionType, HistoryFieldType } from '../enums';

export type EntitySchemaKey<T extends object> = {
  actionLabelsTemplates: {
    [HistoryActionType.Update]: string | null;
  };
  formatter?: (value: any) => any;
  friendlyName: string;
  type: HistoryFieldType;
  shape?: EntitySchema<T>;
};
