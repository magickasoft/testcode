import gql from 'graphql-tag';
import { mprofileFull } from './fragments';


const BLOCK_USER = gql`
  mutation blockUser ($targetProfileId: Int!) {
    blockUser(targetProfileId: $targetProfileId) {
      ...mprofileFull
    }
  }
  ${mprofileFull}
`;

const UNBLOCK_USER = gql`
  mutation unblockUser ($targetProfileId: Int!) {
    unblockUser(targetProfileId: $targetProfileId) {
      ...mprofileFull
    }
  }
  ${mprofileFull}
`;

export default {
  BLOCK_USER,
  UNBLOCK_USER,
};
