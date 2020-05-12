import { Alert } from 'react-native';
import R from 'ramda';
import {
  removeAlbumFromMyAlbums,
  addAlbumToMyAlbums,
  removeAlbumFromAlbumsList,
  addAlbumToAlbumsList
} from './storeOperations';

const removeAlbum = ({
  mutate,
  variables,
  albumTitle,
  profileId
}) => {
  const onPress = () => {
    mutate({
      variables,
      update: (store, response) => {
        const album = R.path(['data', 'removeAlbum'], response);
        if (!album) return;

        removeAlbumFromMyAlbums(store, album);
        removeAlbumFromAlbumsList(store, album, profileId);
      }
    });
  };
  Alert.alert('Remove Album', `Are you sure you want to remove album ${albumTitle}?`, [
    { text: 'Yes', onPress },
    { text: 'Cancel' }
  ]);
};

const updateAlbum = ({
  mutate,
  variables
}) => {
  mutate({
    variables
  });
};

const createAlbum = ({
  mutate,
  variables,
  profileId
}) => {
  mutate({
    variables,
    update: (store, response) => {
      const album = R.path(['data', 'createAlbum'], response);
      if (!album) return;

      addAlbumToMyAlbums(store, album);
      addAlbumToAlbumsList(store, album, profileId);
    }
  });
};

const attachFileToAlbum = ({ mutate, variables }) => {
  mutate({
    variables
  });
};

const removeImageFromAlbum = ({ mutate, variables }) => {
  const onPress = () => {
    mutate({
      variables
    });
  };
  Alert.alert('Remove Photo', 'Are you sure you want to remove this photo?', [
    { text: 'Yes', onPress },
    { text: 'Cancel' }
  ]);
};

const likeAlbumImage = ({ mutate, variables }) => {
  mutate({
    variables
  });
};

const addViewToAlbumImage = ({ mutate, variables }) => {
  mutate({
    variables
  });
};

const requestAlbumAccess = ({ mutate, variables }) => {
  const onPress = async () => {
    await mutate({
      variables
    });
    Alert.alert('Access request', 'Access request was sent');
  };

  Alert.alert('Album is private', 'To view this album, you should request access', [
    { text: 'Request', onPress },
    { text: 'Cancel' }
  ]);
};

const acceptAlbumAccessRequest = ({ mutate, variables }) => {
  mutate({
    variables
  });
};

export default {
  removeAlbum,
  updateAlbum,
  createAlbum,
  attachFileToAlbum,
  removeImageFromAlbum,
  likeAlbumImage,
  addViewToAlbumImage,
  requestAlbumAccess,
  acceptAlbumAccessRequest
};
