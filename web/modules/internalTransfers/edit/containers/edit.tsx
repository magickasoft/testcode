import * as React from 'react';
import * as UrlParse from 'url-parse';
import { DialogRoute } from 'components/Dialog';
import { RouteComponentProps } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { internalTransferActions } from 'modules/internalTransfers/details/actions';
import { InternalTransferFilterModel } from 'modules/internalTransfers/details/models';
import { licenseListSelectors } from 'modules/licenses/list';
import { companiesListSelectors } from 'modules/companies/list';
import { INTERNAL_TRANSFER_ADD_PATH, InternalTransferDeletionContainer } from 'modules/internalTransfers/edit';
import { InternalTransferFormModel } from 'modules/internalTransfers/models/InternalTransferFormModel';
import { push } from 'modules/router/effects';
import { internalTransferWriteActions } from '../actions';
import { EditInternalTransferForm } from '../components/EditInternalTransferForm';
import { internalTransferFormSelector } from '../selectors';
import { INTERNAL_TRANSFER_EDIT_PATH } from '../constants';

interface Properties {
  children: React.ReactNode;
}

const Container = (props: Properties & RouteComponentProps) => {
  const parsedUrl = UrlParse.default(window.location.href, true);
  const licenseId = +parsedUrl.query.licenseId;
  const dispatch = useDispatch();
  const {
    match: {
      params: { id }
    }
  } = props;
  const value = useSelector(internalTransferFormSelector.getEntity);
  const licenses = useSelector(licenseListSelectors.getEntity);
  const companies = useSelector(companiesListSelectors.getEntity);

  React.useEffect(() => {
    if (+id) {
      dispatch(internalTransferActions.read.call(new InternalTransferFilterModel().setValue({ id: +id })));
    } else {
      dispatch(
        internalTransferWriteActions.value.set(
          new InternalTransferFormModel().setValue({ recipient_license_id: licenseId || null })
        )
      );
    }
  }, []);

  const onChange = React.useCallback((value) => dispatch(internalTransferWriteActions.value.set(value)), []);

  const onSubmit = React.useCallback(() => dispatch(internalTransferWriteActions.write.call(value)), [value]);

  const onDelete = React.useCallback(() => push(`${INTERNAL_TRANSFER_EDIT_PATH}/${id}/delete`), [value]);

  return (
    <EditInternalTransferForm
      value={value}
      onChange={onChange}
      onSubmit={onSubmit}
      onDelete={onDelete}
      licenses={licenses}
      companies={companies}
    >
      <Switch>
        <DialogRoute
          path={`${INTERNAL_TRANSFER_EDIT_PATH}/:id/delete`}
          component={InternalTransferDeletionContainer}
          closePath={`${INTERNAL_TRANSFER_EDIT_PATH}/${id}`}
          dialog-title="Delete Internal Transfer Page"
        />
      </Switch>
    </EditInternalTransferForm>
  );
};

export const internalTransferAddRoute = <Route path={INTERNAL_TRANSFER_ADD_PATH} component={Container} />;

export const internalTransferEditRoute = <Route path={`${INTERNAL_TRANSFER_EDIT_PATH}/:id`} component={Container} />;
