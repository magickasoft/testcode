import { errors } from '@utils/helpers';
import queries from './queries';

export const addRequestToMyLoyaltyRequests = errors.handleError((store, event) => {
  const myLoyaltyData = store.readQuery({ query: queries.MY_LOYALTY_REQUESTS });
  myLoyaltyData.myEvents.push(event);
  store.writeQuery({
    query: queries.MY_LOYALTY_REQUESTS,
    data: myLoyaltyData
  });
}, 'Cannot add to my requests');
