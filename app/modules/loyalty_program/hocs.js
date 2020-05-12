import R from 'ramda';
import { hoc } from '../../utils/helpers/graphQl';
import mutations from './mutations';
import queries from './queries';
import { LOYALTY_PROGRAM_STATUS, LOYALTY_PROGRAM_LIMIT } from '@constants';

export const queryGetRequestForLoyaltyProgram = hoc(queries.GET_REQUEST_FOR_LOYALTY_PROGRAM, {
  name: 'getRequestForLoyaltyProgram',
  options: (props) => ({
    variables: {
      id: props.id
    }
  })
});

export const queryMyLoyaltyRequests = hoc(queries.MY_LOYALTY_REQUESTS, {
  name: 'myLoyaltyRequests',
  options: (props) => ({
    variables: {
      limit: R.pathOr(LOYALTY_PROGRAM_LIMIT, ['limit'], props),
      offset: 0,
      status: R.pathOr(LOYALTY_PROGRAM_STATUS.OPEN, ['status'], props)
    }
  })
});

export const mutationRequestLoyaltyPointsViaReceipt = hoc(mutations.REQUEST_LOYALTY_POINTS_VIA_RECEIPT, {
  name: 'requestLoyaltyPointsViaReceipt'
});

export const mutationGiveLoyaltyPointsViaReceipt = hoc(mutations.GIVE_LOYALTY_POINTS_VIA_RECEIPT, {
  name: 'giveLoyaltyPointsViaReceipt'
});
