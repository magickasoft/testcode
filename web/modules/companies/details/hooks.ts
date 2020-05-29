import { useDispatch, useSelector } from 'react-redux';
import * as React from 'react';
import { modelCompany } from 'types/foundation';
import { companyDetailsSelectors } from './selectors';
import { companyDetailsActions } from './actions';
import { CompanyDetailsModel } from './models';

export const useCompany = ({ id }): [modelCompany, boolean] => {
  const dispatch = useDispatch();
  const entity = useSelector(companyDetailsSelectors.getEntity);

  React.useEffect(() => {
    dispatch(companyDetailsActions.read.call(new CompanyDetailsModel().setValue({ id })));
  }, [id]);

  return [entity.getById(id), entity.isPending()];
};
