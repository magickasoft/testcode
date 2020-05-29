import * as React from 'react';
import isEqual from 'lodash/isEqual';
import { Link } from 'react-router-dom';
import { INTERNAL_TRANSFERS_LIST_PAGE_PATH } from 'modules/internalTransfers/list';
import { push } from 'modules/router/effects';
import { Page, PageDefaultProps } from 'components/Page/index';
import { Panel } from 'components/Panel';
import { Layer } from 'components/Layer';
import { FieldSet } from 'components/Field';
import { Button } from 'components/Button';
import { FormButtons } from 'components/Form';
import { Delimiter } from 'components/Delimiter';
import { ListModel } from 'utils/list/index';
import { InternalTransferFormModel } from 'modules/internalTransfers/models/InternalTransferFormModel';
import { RelationshipDetails } from './components/RelationshipDetails';
import { SystemInformation } from './components/SystemInformation';

import styles from './styles.module.css';

interface Properties {
  value: typeof InternalTransferFormModel;
  onChange: (value: typeof InternalTransferFormModel) => any;
  onSubmit: () => any;
  onDelete: () => any;
  children: React.ReactNode;
  licenses: ListModel;
  companies: ListModel;
}

const Form = (props: Properties) => {
  const { value, children, licenses, companies, onChange, onSubmit, onDelete } = props;
  const { id } = value.getValue();
  const hasChanges = !isEqual(value.getValue(), value.getInitialValue());
  const onCancel = React.useCallback(() => push(`${INTERNAL_TRANSFERS_LIST_PAGE_PATH}/${id}`), []);

  return (
    <Page {...props} subTitle={id ? `IT-${id}` : 'New Internal Transfer'} isPending={value.isPending()}>
      {children}
      <Layer rounded shadowed>
        <Panel
          collapsible={false}
          title={+id ? 'Edit Internal Transfer Information' : 'Create New Transfer'}
          content-className={styles.content}
        >
          <RelationshipDetails value={value} licenses={licenses} companies={companies} onChange={onChange} />
          {!!id && <SystemInformation value={value} onChange={onChange} />}
        </Panel>
      </Layer>
      <div className={styles.buttons}>
        <FormButtons
          cancel-disabled={value.isPending()}
          cancel-onClick={onCancel}
          submit-pending={value.isPending()}
          submit-disabled={!hasChanges || value.isPending() || value.hasError()}
          submit-onClick={onSubmit}
          delete-isHidden={!+id}
          delete-children="Delete"
          delete-onClick={onDelete}
        />
      </div>
    </Page>
  );
};

Form.defaultProps = {
  ...PageDefaultProps,
  title: 'Internal Transfer Page',
  face: Page.FACE_SECONDARY
};

export const EditInternalTransferForm = React.memo(Form);
