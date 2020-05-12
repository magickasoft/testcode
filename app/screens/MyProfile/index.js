import {
  compose,
  hoistStatics,
  withHandlers,
  withProps,
  withState,
} from 'recompose';
import R from 'ramda';
import Share from 'react-native-share';

import { withSetter, withUploadPhoto, withCopilot, withPhotoSourceSelect } from '@utils/enhancers';
import { screens } from '@constants';
import { myProfileHocs, myProfileOperations } from '@modules/myProfile';
import { albumsHocs } from '@modules/albums';
import { friendsHocs } from '@modules/friends';
import MyProfile from './MyProfile';
import {
  mapAlbumsPreview,
  getTotalPhotosCount,
  mapFriendsPreview,
  getTotalFriendsCount,
} from './utils';

const enhance = compose(
  withSetter('galleryIndex', null),
  myProfileHocs.mutationSetProfileImage(),
  myProfileHocs.queryCurrentProfile({ fetchPolicy: 'cache-and-network' }),
  friendsHocs.queryGetMyFriends({ fetchPolicy: 'cache-and-network' }),
  albumsHocs.queryGetAlbumsPreview({ fetchPolicy: 'cache-and-network' }),

  withProps(props => ({
    currentProfile: R.pathOr({}, ['currentProfile', 'currentProfile'], props),
    albumsPreview: mapAlbumsPreview(props),
    totalPhotosCount: getTotalPhotosCount(props),
    friendsPreview: mapFriendsPreview(props),
    totalFriendsCount: getTotalFriendsCount(props),
  })),
  withHandlers({
    onShare: () => () => {
      const shareOptions = {
        title: 'Community A',
        message: 'Join me at Community A ',
        url: 'www.CommunityA.com',
        subject: 'Share Link', //  for email
      };

      Share.open(shareOptions)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          err && console.log(err);
        });
    },
    onEditProfile: props => () => {
      props.navigator.push(screens.MyProfileEdit);
    },
    onGoToFriends: props => () => {
      props.navigator.push(screens.People);
    },
    onGoToProfile: props => ({ id }) => {
      props.navigator.push(screens.Profile, {
        passProps: {
          id,
        },
      });
    },
    onGoToMyAlbums: ({ currentProfile, navigator }) => () => {
      navigator.push(screens.AlbumsList, {
        passProps: {
          profileId: currentProfile.id,
        },
      });
    },
    onGoToAlbum: props => ({ id }) => {
      props.navigator.push(screens.Album, {
        passProps: {
          albumId: id,
        },
      });
    },
  }),
  withUploadPhoto((props, data) => {
    myProfileOperations.setProfileImage({
      mutate: props.mutationSetProfileImage,
      variables: {
        fileId: R.pathOr(null, ['file', 'id'], data),
      },
      filename: R.pathOr(null, ['file', 'filename'], data),
      currentProfile: props.currentProfile,
    });
  }, 'uploadPhoto'),
  withPhotoSourceSelect({
    photoUploaderPropName: 'uploadPhoto',
  }),
  
  withState('scrollRef', 'setScrollRef', null),
  withCopilot(screens.MyProfile, (props, { name }) => {
    if (name === 'profile-edit') {
      props.scrollRef.scrollToEnd({ animated: false });
    }
  }),
);

export default hoistStatics(enhance)(MyProfile);
