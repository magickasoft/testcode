import { Alert } from 'react-native';
import R from 'ramda';

import {
  addProfileToBlockedUsers,
  removeProfileFromBlockedUsers,
} from '../friends/storeOperations';

const fetchMoreProfiles = ({
  fetchMore, profiles,
}) => {
  fetchMore({
    variables: {
      offset: profiles.length,
    },
    updateQuery: (previousResult, { fetchMoreResult }) => ({
      ...previousResult,
      ...fetchMoreResult,
      profiles: {
        ...previousResult,
        ...fetchMoreResult.profiles,
        profiles: [
          ...profiles,
          ...fetchMoreResult.profiles.profiles,
        ],
      },
    }),
  });
};

const blockUser = ({
  mutate,
  variables,
}) => {
  const onPress = () => {
    mutate({
      variables,
      update: (store, response) => {
        const profile = R.path(['data', 'blockUser'], response);
        if (!profile) return;

        addProfileToBlockedUsers(store, profile);
      },
    });

    Alert.alert(
      'Blocked',
      'You have blocked this user. They cannot message you, send you a friend request to browse your photos.', [ // eslint-disable-line
        { text: 'ok' },
      ]);
  };

  Alert.alert('Block', 'Are you sure you want to block this user ?', [
    {
      text: 'Yes',
      onPress,
    },
    { text: 'Cancel' },
  ]);
};

const unblockUser = ({
  mutate,
  variables,
}) => {
  const onPress = () => {
    mutate({
      variables,
      update: (store, response) => {
        const profile = R.path(['data', 'unblockUser'], response);
        if (!profile) return;

        removeProfileFromBlockedUsers(store, profile);
      },
    });
  };

  Alert.alert('Unlock', 'Are you sure you want to unblock this user?', [
    {
      text: 'Yes',
      onPress,
    },
    { text: 'Cancel' },
  ]);
};


export default {
  fetchMoreProfiles,
  blockUser,
  unblockUser,
};
