import { MAIN_PATH } from 'modules/main';

export const getAnnualReviewDetailUrl = ({ companyId, id }) => `${MAIN_PATH}/annual-review/detail/${companyId}/${id}`;
