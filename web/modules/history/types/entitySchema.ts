import { EntitySchemaKey } from './entitySchemaKey';

export type EntitySchema<E extends object> = {
  [key in keyof E]: EntitySchemaKey<any>;
};
