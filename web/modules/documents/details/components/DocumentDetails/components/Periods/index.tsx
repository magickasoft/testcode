import * as React from 'react';
import { PageSection } from 'components/Page';
import { Link } from 'components/Link';
import { ConnectedTable, forceTableUpdate } from 'modules/tables';
import { DOCUMENTS_DETAILS_PAGE_PATH } from 'modules/documents/details/constants';
import { useDispatch } from 'react-redux';
import { columns } from './columns';
import { selector } from './selector';

interface Properties {
  documentId: number;
}

export const Periods = React.memo((properties: Properties) => {
  const { documentId } = properties;
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(forceTableUpdate('documents-periods'));
  }, [documentId]);

  const renderActions = React.useCallback(
    () => (
      <Link button rounded to={`${DOCUMENTS_DETAILS_PAGE_PATH}/${documentId}/add-period`} face={Link.FACE_DEFAULT}>
        Add New
      </Link>
    ),
    []
  );

  return (
    <PageSection face={PageSection.FACE_SECONDARY} title="Document Periods" actions={renderActions()}>
      <ConnectedTable
        serverPagination
        columns={columns}
        storePath="documents-periods"
        menuContainerId="documentPeriodsTableMenuContainer"
        dataSources={[
          {
            key: 'periods',
            url: '/document-period-list',
            handler: () => ({
              _options: {
                filters: [
                  {
                    field: 'document_id',
                    type: 'eq',
                    value: documentId
                  }
                ],
                orders: [
                  { field: 'status', direction: 'DESC' },
                  { field: 'expiration_date', direction: 'ASC' }
                ]
              }
            })
          }
        ]}
        dataSourceSelector={selector}
      />
    </PageSection>
  );
});
