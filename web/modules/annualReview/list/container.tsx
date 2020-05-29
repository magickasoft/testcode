import * as React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { companiesListSelectors } from 'modules/companies/list';
import { AnnualReviewList } from './components/AnnualReviewList';
import { ANNUAL_REVIEW_LIST_PAGE_PATH } from './constants';

export const AnnualReviewPageSection = React.memo(() => {
  const companies = useSelector(companiesListSelectors.getEntity);
  return <AnnualReviewList companies={companies} />;
});

export const annualReviewListRoute = <Route path={ANNUAL_REVIEW_LIST_PAGE_PATH} component={AnnualReviewPageSection} />;
