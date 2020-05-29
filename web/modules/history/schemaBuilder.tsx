import * as React from 'react';
import { EntitySchema, EntitySchemaKey } from 'modules/history/types';
import { HistoryActionType, HistoryFieldFormatter, HistoryFieldType } from 'modules/history/enums';
import { DateTime } from 'components/DateTime';

/**
 * Boolean values formatter.
 */
const booleanFormatter = (value: boolean) => (value ? 'yes' : 'no');

const dateTimeFormatter = (value: any) => !!value && <DateTime utc={value} dateFormat="YYYY/MM/DD" />;

/**
 * Get schema describing one key og history record object. T generic should describe shape of optional
 * "shape" key.
 * @param friendlyName - name to be shown.
 * @param formatter - optional value formatter.
 * @param type - field type, possible values - primitive, object, array.
 * @param shape - shape for object & array types.
 * @return generated schema key.
 */
export const schemaKey = <T extends object>(
  friendlyName: string,
  formatter?: HistoryFieldFormatter | ((value: any) => any),
  type?: HistoryFieldType,
  shape?: EntitySchema<T>
): EntitySchemaKey<T> => {
  const formatters = {
    boolean: booleanFormatter,
    datetime: dateTimeFormatter
  };

  return {
    friendlyName,
    shape,
    actionLabelsTemplates: {
      [HistoryActionType.Update]: `<b>${friendlyName}</b> changed from %s to <b>%s</b>`
    },
    formatter: formatters[formatter as any] || formatter,
    type: type || HistoryFieldType.Primitive
  };
};
