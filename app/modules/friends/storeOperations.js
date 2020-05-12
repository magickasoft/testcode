import R from 'ramda';

import { errors } from '@utils/helpers';

import queries from './queries';

export const removeProfileFromMyFriendList = errors.handleError((store, profile) => {
  const friendsData = store.readQuery({ query: queries.GET_MY_FRIENDS });
  const index = friendsData.myFriendsList.findIndex(R.propEq('id', profile.id));
  if (index === -1) return;

  friendsData.myFriendsList.splice(index, 1);
  store.writeQuery({
    query: queries.GET_MY_FRIENDS,
    data: friendsData,
  });
}, 'Cannot remove from friend lists');

export const addProfileToMyFriendsList = errors.handleError((store, profile) => {
  const friendsData = store.readQuery({ query: queries.GET_MY_FRIENDS });
  friendsData.myFriendsList.push(profile);
  store.writeQuery({
    query: queries.GET_MY_FRIENDS,
    data: friendsData,
  });
}, 'Cannot add to friend lists');

export const removeProfileFromOutgoingRequests = errors.handleError((store, profile) => {
  const outgoingRequestsData = store.readQuery({ query: queries.GET_OUTGOING_FRIEND_REQUESTS });
  const index = outgoingRequestsData.outgoingFriendRequests.findIndex(R.propEq('id', profile.id));
  if (index === -1) return;

  outgoingRequestsData.outgoingFriendRequests.splice(index, 1);
  store.writeQuery({
    query: queries.GET_OUTGOING_FRIEND_REQUESTS,
    data: outgoingRequestsData,
  });
}, 'Cannot remove outgoing friend request');

export const addProfileToOutgoingRequests = errors.handleError((store, profile) => {
  const outgoingRequestsData = store.readQuery({ query: queries.GET_OUTGOING_FRIEND_REQUESTS });
  outgoingRequestsData.outgoingFriendRequests.push(profile);
  store.writeQuery({
    query: queries.GET_OUTGOING_FRIEND_REQUESTS,
    data: outgoingRequestsData,
  });
}, 'Cannot add to outgoing friend requests');

export const removeProfileFromIncomingRequests = errors.handleError((store, profile) => {
  const incomingRequestsData = store.readQuery({ query: queries.GET_INCOMING_FRIEND_REQUESTS });
  const index = incomingRequestsData.incomingFriendRequests.findIndex(R.propEq('id', profile.id));
  if (index === -1) return;

  incomingRequestsData.incomingFriendRequests.splice(index, 1);
  store.writeQuery({
    query: queries.GET_INCOMING_FRIEND_REQUESTS,
    data: incomingRequestsData,
  });
}, 'Cannot remove incoming friend request');

export const addProfileToIncomingRequests = errors.handleError((store, profile) => {
  const incomingRequestsData = store.readQuery({ query: queries.GET_INCOMING_FRIEND_REQUESTS });
  incomingRequestsData.incomingFriendRequests.push(profile);
  store.writeQuery({
    query: queries.GET_INCOMING_FRIEND_REQUESTS,
    data: incomingRequestsData,
  });
}, 'Cannot add to incoming friend requests');

export const removeProfileFromBlockedUsers = errors.handleError((store, profile) => {
  const blockedUsersData = store.readQuery({ query: queries.GET_BLOCKED_USERS });
  const index = blockedUsersData.blockedUsers.findIndex(R.propEq('id', profile.id));
  if (index === -1) return;

  blockedUsersData.blockedUsers.splice(index, 1);
  store.writeQuery({
    query: queries.GET_BLOCKED_USERS,
    data: blockedUsersData,
  });
}, 'Cannot remove from blocked users list');

export const addProfileToBlockedUsers = errors.handleError((store, profile) => {
  const blockedUsersData = store.readQuery({ query: queries.GET_BLOCKED_USERS });
  if (blockedUsersData.blockedUsers.some(R.propEq('id', profile.id))) return;

  blockedUsersData.blockedUsers.push(profile);
  store.writeQuery({
    query: queries.GET_BLOCKED_USERS,
    data: blockedUsersData,
  });
}, 'Cannot add to blocked users list');
