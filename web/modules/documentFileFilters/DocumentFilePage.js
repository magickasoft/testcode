import React from 'react';
import { connect } from 'react-redux';
import { Layer } from 'components/Layer';
import { Table } from 'components/Table';
import { PageSection, PageDefaultProps, PagePropTypes } from 'components/Page';
import { Search } from 'components/Search';
import { columns } from 'modules/alerts/data';
import { createDispatchers } from 'utils/redux';
import { DocumentFileFilterPanel } from 'modules/alerts/components/DocumentFileFilterPanel';
import { documentFileListActions, documentFileListSelectors } from '../documentFileList';
import { documentFileFiltersActions, documentFileFiltersSelectors } from './documentFileFilters';

export const DocumentFilePagePropTypes = {
  ...PagePropTypes
};

export const DocumentFilePageDefaultProps = {
  ...PageDefaultProps,
  defaultPageSize: 10
};

const DocumentFilePage = ({ data, defaultPageSize, ...props }) => {
  const dataSource = [...data.getValue().values()];

  return (
    <PageSection title="Documents Files Approval" actions={<Search />}>
      <Layer rounded shadowed>
        <DocumentFileFilterPanel {...props} />
        <Table
          loading={data.isPending()}
          locale={{ emptyText: dataSource?.length === 0 ? 'No data' : 'No results found' }}
          customColumns={columns.documentsApproval}
          dataSource={dataSource}
          pagination={{ defaultPageSize }}
        />
      </Layer>
    </PageSection>
  );
};

DocumentFilePage.propTypes = {
  ...DocumentFilePagePropTypes
};
DocumentFilePage.defaultProps = {
  ...DocumentFilePageDefaultProps
};

export default connect(
  (state) => ({
    value: documentFileFiltersSelectors.getEntity(state),
    data: documentFileListSelectors.getEntity(state)
  }),
  createDispatchers({
    onToggle: documentFileFiltersActions.value.toggle,
    onRead: documentFileListActions.read.call,
    onSet: documentFileFiltersActions.value.set
  })
)(DocumentFilePage);
