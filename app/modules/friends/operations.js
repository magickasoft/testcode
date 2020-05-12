import { Alert } from 'react-native';
import R from 'ramda';
import {
  removeProfileFromMyFriendList,
  addProfileToMyFriendsList,
  removeProfileFromOutgoingRequests,
  addProfileToOutgoingRequests,
  removeProfileFromIncomingRequests,
  addProfileToIncomingRequests,
} from './storeOperations';

const removeFriend = ({
  mutate,
  variables,
  friendName,
}) => {
  const onPress = () => {
    mutate({
      variables,
      update: (store, response) => {
        const profile = R.path(['data', 'removeFriend'], response);
        if (!profile) return;

        removeProfileFromMyFriendList(store, profile);
        addProfileToIncomingRequests(store, profile);
      },
    });
  };
  Alert.alert('Unfriend', `Are you sure you want to unfriend ${friendName}?`, [
    { text: 'Yes', onPress },
    { text: 'Cancel' },
  ]);
};

const sendAcceptFriendRequest = async ({
  mutate,
  variables,
  friendName,
}) => {
  const mutationResponse = await mutate({
    variables,
    update: (store, response) => {
      const profile = R.path(['data', 'sendAcceptFriendRequest'], response);
      if (!profile) return;
  
      if (profile.relations.isFriends) {
        addProfileToMyFriendsList(store, profile);
        removeProfileFromIncomingRequests(store, profile);
      } else {
        addProfileToOutgoingRequests(store, profile);
      }
    },
  });
  const isFriends = R.path(['data', 'sendAcceptFriendRequest', 'relations', 'isFriends'], mutationResponse);
  const message = isFriends
    ? `You added ${friendName} to friends`
    : `You sent ${friendName} a friend request`;
  Alert.alert('Friend', message, [
    { text: 'Ok' },
  ]);
};

const blockFriendRequest = ({
  mutate,
  variables,
}) => {
  mutate({
    variables,
    update: (store, response) => {
      const profile = R.path(['data', 'blockFriendRequest'], response);
      if (!profile) return;

      removeProfileFromIncomingRequests(store, profile);
    },
  });
};

const cancelFriendRequest = ({
  mutate,
  variables,
}) => {
  mutate({
    variables,
    update: (store, response) => {
      const profile = R.path(['data', 'cancelFriendRequest'], response);

      removeProfileFromOutgoingRequests(store, profile);
    },
  });
};

export default {
  removeFriend,
  sendAcceptFriendRequest,
  blockFriendRequest,
  cancelFriendRequest,
};
