import gql from 'graphql-tag';
import { mprofileFull } from '../myProfile/fragments';

const LoyaltyProgram = gql`
  fragment LoyaltyProgram on LoyaltyProgram {
    id
    mprofile_id
    profile {
      ...mprofileFull
    }
    created_ts
    updated_ts
    data
    raw_data
    type
    status
  }
  ${mprofileFull}
`;


export { LoyaltyProgram };
