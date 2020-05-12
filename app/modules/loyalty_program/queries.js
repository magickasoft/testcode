import gql from 'graphql-tag';
import { LoyaltyProgram } from './fragments';

const GET_REQUEST_FOR_LOYALTY_PROGRAM = gql`
  query GetRequestForLoyaltyProgram ($id: Int!) {
    getRequestForLoyaltyProgram (id: $id){
      ...LoyaltyProgram
    }
  }
  ${LoyaltyProgram}
`;

const MY_LOYALTY_REQUESTS = gql`
  query MyLoyaltyRequests($limit: Int, $offset: Int, $status: Int ) {
    myLoyaltyRequests(
      limit: $limit,
      offset: $offset,
      status: $status,
    ) {
      requests {
        ...LoyaltyProgram
      }
      totalCount
    }
  }
  ${LoyaltyProgram}
`;

export default {
  GET_REQUEST_FOR_LOYALTY_PROGRAM,
  MY_LOYALTY_REQUESTS
};
