import gql from 'graphql-tag';
import { LoyaltyProgram } from './fragments';

const REQUEST_LOYALTY_POINTS_VIA_RECEIPT = gql`
  mutation RequestLoyaltyPointsViaReceipt ($input: requestLoyaltyPointsInput!) {
    requestLoyaltyPointsViaReceipt(input: $input) {
      ...LoyaltyProgram
    }
  }
  ${LoyaltyProgram}
`;

const GIVE_LOYALTY_POINTS_VIA_RECEIPT = gql`
  mutation GiveLoyaltyPointsViaReceipt ($input: giveLoyaltyPointsInput!) {
    giveLoyaltyPointsViaReceipt(input: $input) {
      ...LoyaltyProgram
    }
  }
  ${LoyaltyProgram}
`;

export default {
  REQUEST_LOYALTY_POINTS_VIA_RECEIPT,
  GIVE_LOYALTY_POINTS_VIA_RECEIPT
};
