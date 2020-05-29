import { AnnualReviewFilterModel } from '../../../../models';
import { Filter } from './Filter';

export const filterSettings = (companies) => ({
  companies,
  component: Filter,
  value: new AnnualReviewFilterModel()
});
