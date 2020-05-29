import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modelAnnualReview, modelAnnualReviewSalesDeposits } from 'types/foundation';
import { EntityModel } from 'utils/entity';
import { annualReviewDetailsSalesDepositsActions, annualReviewDetailsActions } from './actions';
import { annualReviewSalesDepositsSelector, annualReviewDetailsSelector } from './selectors';
import { AnnualReviewDetailsFilterModel, AnnualReviewDetailsSalesDepositsFilterModel } from './models';

export const useAnnualReview = ({ id, companyId }): [modelAnnualReview, boolean, EntityModel] => {
  const dispatch = useDispatch();
  const entity = useSelector(annualReviewDetailsSelector.getEntity);

  React.useEffect(() => {
    dispatch(
      annualReviewDetailsActions.read.call(
        new AnnualReviewDetailsFilterModel().setValue({
          id: +id,
          company_id: +companyId
        })
      )
    );
  }, [id, companyId]);

  return [entity.getById(id), entity.isPending(), entity];
};

export const useAnualReviewSalesDeposits = ({ id }): [modelAnnualReviewSalesDeposits[], boolean] => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(
      annualReviewDetailsSalesDepositsActions.read.call(
        new AnnualReviewDetailsSalesDepositsFilterModel().setValue({
          annual_review_id: +id
        })
      )
    );
  }, [id]);

  const entity = useSelector(annualReviewSalesDepositsSelector.getEntity);

  return [entity.getValue(), entity.isPending()];
};
