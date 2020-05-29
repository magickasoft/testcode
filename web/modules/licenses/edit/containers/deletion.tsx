import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { LicenseDetailsFilterModel, licenseDetailsActions } from 'modules/licenses/details';
import { licenseDeleteActions } from '../actions';
import { licenseDeletionSelector } from '../selectors';
import { DeleteLicense } from '../components/DeleteLicense';

interface Properties {
  onClose: () => any;
}

const container = (properties: Properties & RouteComponentProps) => {
  const {
    match: {
      params: { licenseId }
    }
  } = properties;
  const dispatch = useDispatch();
  const managedLicense = useSelector(licenseDeletionSelector.getEntity);

  React.useEffect(() => {
    if (+licenseId) {
      dispatch(licenseDetailsActions.read.call(new LicenseDetailsFilterModel().setValue({ id: +licenseId })));
    }
  }, []);

  React.useEffect(() => {
    dispatch(licenseDeleteActions.value.set(managedLicense));
  }, [managedLicense]);

  const value = useSelector(licenseDeletionSelector.getEntity);

  const onDelete = React.useCallback(() => dispatch(licenseDeleteActions.delete.call(value)), [value]);

  return <DeleteLicense value={value} onDelete={onDelete} onClose={properties.onClose} />;
};

export { container as DeleteLicenseContainer };
