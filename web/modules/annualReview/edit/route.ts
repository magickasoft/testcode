import { MAIN_PATH } from 'modules/main';

export const getAnnualReviewEditUrl = ({ companyId, id }) => `${MAIN_PATH}/annual-review/edit/${companyId}/${id}`;
export const getAnnualReviewDeleteUrl = ({ companyId, id }) => `${getAnnualReviewEditUrl({ companyId, id })}/delete`;
