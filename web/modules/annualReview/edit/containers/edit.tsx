import * as React from 'react';
import { RouterComponentProps } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { useCompany } from 'modules/companies/details';
import { useAnnualReview } from 'modules/annualReview/details';
import { DialogRoute } from 'components/Dialog';
import isEqual from 'lodash/isEqual';
import { AnnualReviewEditForm } from '../components/AnnualReviewEditForm/AnnualReviewEditForm';
import { getAnnualReviewDeleteUrl, getAnnualReviewEditUrl } from '../route';
import { useAnnualReviewForm } from '../hooks';

import { DeletionContainer } from './deletion';

export interface EditProps {
  children: React.ReactNode;
}

const getRouteParams = (props: RouterComponentProps) => {
  const {
    match: {
      params: { id, company_id: companyId }
    }
  } = props;

  return {
    id: +id,
    companyId: +companyId
  };
};

export const EditContainer = (props: EditProps) => {
  const { id, companyId } = getRouteParams(props);
  const [annualReview, isPending] = useAnnualReview({ companyId, id });
  const [value, onChange, onSubmit, onDelete] = useAnnualReviewForm({ id, companyId });
  const [company] = useCompany({ id: companyId });
  const hasChanges = !isEqual(value.getValue(), value.getInitialValue());

  return (
    <AnnualReviewEditForm
      id={id}
      value={value}
      onChange={onChange}
      onSubmit={onSubmit}
      onDelete={onDelete}
      hasChanges={hasChanges}
      isPending={isPending}
      companyId={companyId}
      annualReview={annualReview}
      company={company}
    >
      <Switch>
        <DialogRoute
          path={getAnnualReviewDeleteUrl({ id: ':id', companyId: ':company_id' })}
          component={DeletionContainer}
          closePath={getAnnualReviewEditUrl({ id, companyId })}
          dialog-title="Delete Internal Transfer Page"
        />
      </Switch>
    </AnnualReviewEditForm>
  );
};

export const annualReviewEditRoute = (
  <Route path={getAnnualReviewEditUrl({ id: ':id', companyId: ':company_id' })} component={EditContainer} />
);
