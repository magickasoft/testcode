import { hoc } from '../../utils/helpers/graphQl';
import queries from './queries';
import mutations from './mutations';

const queryGetMyFriends = hoc(queries.GET_MY_FRIENDS, {
  name: 'getMyFriends',
});

const queryGetFriendsList = hoc(queries.GET_FRIENDS_LIST, {
  name: 'getFriendsList',
  options: props => ({
    variables: {
      profileId: props.id || props.profileId,
    },
  }),
});

const queryGetIncomingFriendRequests = hoc(queries.GET_INCOMING_FRIEND_REQUESTS, {
  name: 'getIncomingFriendRequests',
});

const queryGetOutgoingFriendRequests = hoc(queries.GET_OUTGOING_FRIEND_REQUESTS, {
  name: 'getOutgoingFriendRequests',
});

const queryGetBlockedUsers = hoc(queries.GET_BLOCKED_USERS, {
  name: 'getGetBlockedUsers',
});

const mutationSendAcceptFriendRequest = hoc(mutations.SEND_ACCEPT_FRIEND_REQUEST, {
  name: 'sendAcceptFriendRequest',
});

const mutationBlockFriendRequest = hoc(mutations.BLOCK_FRIEND_REQUEST, {
  name: 'blockFriendRequest',
});

const mutationCancelFriendRequest = hoc(mutations.CANCEL_FRIEND_REQUEST, {
  name: 'cancelFriendRequest',
});

const mutationRemoveFriend = hoc(mutations.REMOVE_FRIEND, {
  name: 'removeFriend',
});

export default {
  queryGetMyFriends,
  queryGetIncomingFriendRequests,
  queryGetOutgoingFriendRequests,
  mutationSendAcceptFriendRequest,
  mutationBlockFriendRequest,
  mutationCancelFriendRequest,
  mutationRemoveFriend,
  queryGetFriendsList,
  queryGetBlockedUsers,
};
