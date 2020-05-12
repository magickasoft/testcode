import gql from 'graphql-tag';
import { mprofileRelations } from '../users/fragments';

const GET_MY_FRIENDS = gql`
  query GetMyFriends {
    myFriendsList {
      ...mprofileRelations
    }
  }
  ${mprofileRelations}
`;

const GET_FRIENDS_LIST = gql`
  query GetFriendsList($profileId: Int!) {
    friendsList(profileId: $profileId) {
      ...mprofileRelations
    }
  }
  ${mprofileRelations}
`;

const GET_INCOMING_FRIEND_REQUESTS = gql`
  query IncomingFriendRequests {
    incomingFriendRequests {
      ...mprofileRelations
    }
  }
  ${mprofileRelations}
`;

const GET_OUTGOING_FRIEND_REQUESTS = gql`
  query OutgoingFriendRequests {
    outgoingFriendRequests {
      ...mprofileRelations
    }
  }
  ${mprofileRelations}
`;

const GET_BLOCKED_USERS = gql`
  query BlockedUsers {
    blockedUsers {
      ...mprofileRelations
    }
  }
  ${mprofileRelations}
`;

export default {
  GET_MY_FRIENDS,
  GET_INCOMING_FRIEND_REQUESTS,
  GET_OUTGOING_FRIEND_REQUESTS,
  GET_FRIENDS_LIST,
  GET_BLOCKED_USERS,
};
