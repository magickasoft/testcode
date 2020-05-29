import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { VendorDetailsFilterModel, vendorDetailsActions } from 'modules/companies/details';
import { vendorDeletionActions } from '../actions';
import { vendorDeletionSelector } from '../selectors';
import { DeleteVendor } from '../components/DeleteVendor';

interface Properties {
  onClose: () => any;
}

export const DeleteVendorDialog = (properties: Properties & RouteComponentProps) => {
  const {
    match: {
      params: { vendorId }
    }
  } = properties;
  const dispatch = useDispatch();
  const managedVendor = useSelector(vendorDeletionSelector.getEntity);

  React.useEffect(() => {
    if (+vendorId) {
      dispatch(vendorDetailsActions.read.call(new VendorDetailsFilterModel().setValue({ id: +vendorId })));
    }
  }, []);

  React.useEffect(() => {
    dispatch(vendorDeletionActions.value.set(managedVendor));
  }, [managedVendor]);

  const value = useSelector(vendorDeletionSelector.getEntity);

  const onDelete = React.useCallback(() => dispatch(vendorDeletionActions.delete.call(value)), [value]);

  return <DeleteVendor value={value} onDelete={onDelete} onClose={properties.onClose} />;
};
