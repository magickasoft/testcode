import * as React from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ConnectedTable, forceTableUpdate } from 'modules/tables';
import { DialogRoute } from 'components/Dialog';
import { PageSectionPropTypes } from 'components/Page';
import { withErrorBoundary } from 'components/ErrorBoundary';
import { HistoryEntityType } from '../../enums';
import { columns } from './columns';
import { dataSources } from './datasources';
import { tableSelector } from './tableSelector';
import { getPathByEntityType } from '../../helpers';

interface Props {
  id?: number;
  type?: HistoryEntityType;
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  sectionProperties?: ReturnType<PageSectionPropTypes>;
  filter?: {
    component: React.ComponentType<any>;
    value: any;
    [rest: string]: any;
    onChange?: (previous: any, current: any) => any;
    hiddenFields?: string[];
  };
  showTypeColumn?: boolean;
}

export const entityHistory = React.memo((props: Props) => {
  const dispatch = useDispatch();
  const { id, type, sectionProperties, filter, showTypeColumn } = props;
  const tablePath = `history.${getPathByEntityType(type)}.${id}`;

  React.useEffect(() => {
    dispatch(forceTableUpdate(tablePath, true));
  }, [tablePath]);

  return (
    <ConnectedTable
      sequentialFetch
      serverPagination
      columns={columns(showTypeColumn)}
      dataSources={dataSources(id, type)}
      dataSourceSelector={tableSelector}
      storePath={tablePath}
      sectionProperties={sectionProperties}
      filter={filter}
    />
  );
});

export const EntityHistory = withErrorBoundary(entityHistory);
