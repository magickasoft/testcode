import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { AffiliatedDetailsFilterModel, affiliatedDetailsActions } from 'modules/companies/details';
import { companiesListSelectors } from 'modules/companies/list';
import { affiliatedDeletionActions } from '../actions';
import { affiliatedDeletionSelector } from '../selectors';
import { DeleteAffiliated } from '../components/DeleteAffiliated';

interface Properties {
  onClose: () => any;
}

export const DeleteAffiliatedDialog = (properties: Properties & RouteComponentProps) => {
  const {
    match: {
      params: { affiliatedId }
    }
  } = properties;
  const dispatch = useDispatch();
  const managedAffiliated = useSelector(affiliatedDeletionSelector.getEntity);
  const companies = useSelector(companiesListSelectors.getEntity);
  const affiliated = companies.getValue().find((i) => i.id === managedAffiliated.getValue().child_company_id);

  React.useEffect(() => {
    if (+affiliatedId) {
      dispatch(affiliatedDetailsActions.read.call(new AffiliatedDetailsFilterModel().setValue({ id: +affiliatedId })));
    }
  }, []);

  React.useEffect(() => {
    dispatch(affiliatedDeletionActions.value.set(managedAffiliated));
  }, [managedAffiliated]);

  const value = useSelector(affiliatedDeletionSelector.getEntity);

  const onDelete = React.useCallback(() => dispatch(affiliatedDeletionActions.delete.call(value)), [value]);

  return <DeleteAffiliated name={affiliated?.name} value={value} onDelete={onDelete} onClose={properties.onClose} />;
};
