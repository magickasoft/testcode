import * as React from 'react';
import { Route, RouterComponentProps } from 'react-router-dom';
import { useCompany } from 'modules/companies/details';
import { getAnnualReviewEditUrl } from 'modules/annualReview/edit/route';
import { AnnualReviewQuestions } from 'modules/annualReview/components';
import {
  AnnualReviewInfo,
  AnnualReviewLicensing,
  AnnualReviewDetails,
  AnnualReviewSummaryTables
} from 'modules/annualReview/details';

import { useAnnualReview } from '../hooks';
import { getAnnualReviewDetailUrl } from '../route';

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

const Container = (props: RouterComponentProps) => {
  const { companyId, id } = getRouteParams(props);
  const [annualReview, isPending] = useAnnualReview({ companyId, id });
  const [company] = useCompany({ id: companyId });

  return (
    <AnnualReviewDetails annualReviewId={id} isPending={isPending}>
      <AnnualReviewInfo
        company={company}
        annualReview={annualReview}
        editUrl={getAnnualReviewEditUrl({ id, companyId })}
      />
      <AnnualReviewLicensing companyId={companyId} questionnaire={annualReview?.questionnaire} />
      <AnnualReviewQuestions questionnaire={annualReview?.questionnaire} />
      <AnnualReviewSummaryTables id={id} />
    </AnnualReviewDetails>
  );
};

export const annualReviewDetailsRoute = (
  <Route path={getAnnualReviewDetailUrl({ id: ':id', companyId: ':company_id' })} component={Container} />
);
