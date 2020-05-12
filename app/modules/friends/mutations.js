import gql from 'graphql-tag';
import { mprofileRelations } from '../users/fragments';

const SEND_ACCEPT_FRIEND_REQUEST = gql`
  mutation SendAcceptFriendRequest ($targetProfileId: Int!) {
    sendAcceptFriendRequest(targetProfileId: $targetProfileId) {
      ...mprofileRelations
    }
  }
  ${mprofileRelations}
`;

const BLOCK_FRIEND_REQUEST = gql`
  mutation BlockFriendRequest ($targetProfileId: Int!) {
    blockFriendRequest(targetProfileId: $targetProfileId) {
      ...mprofileRelations
    }
  }
  ${mprofileRelations}
`;

const CANCEL_FRIEND_REQUEST = gql`
  mutation CancelFriendRequest ($targetProfileId: Int!) {
    cancelFriendRequest(targetProfileId: $targetProfileId) {
      ...mprofileRelations
    }
  }
  ${mprofileRelations}
`;

const REMOVE_FRIEND = gql`
  mutation RemoveFriend ($targetProfileId: Int!) {
    removeFriend(targetProfileId: $targetProfileId) {
      ...mprofileRelations
    }
  }
  ${mprofileRelations}
`;

export default {
  SEND_ACCEPT_FRIEND_REQUEST,
  BLOCK_FRIEND_REQUEST,
  CANCEL_FRIEND_REQUEST,
  REMOVE_FRIEND,
};
