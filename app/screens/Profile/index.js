import {
  compose,
  hoistStatics,
  withHandlers,
  withProps
} from 'recompose';
import R from 'ramda';
import Share from 'react-native-share';
import I18n from 'react-native-i18n';

import Profile from './Profile';
import { usersHocs, usersOperations } from '../../modules/users';
import { screens } from '../../constants';
import { commonHocs, commonOperations } from '../../modules/common';
import { REPORT_ITEM_TYPE, REPORT_TYPE } from '../../constants/report';
import { friendsHocs, friendsOperations } from '../../modules/friends';
import { albumsHocs, albumsOperations } from '../../modules/albums';
import { withActionSheet } from '../../utils/enhancers';
import {
  mapAlbumsPreview,
  getTotalPhotosCount,
  mapFriendsPreview,
  getTotalFriendsCount
} from './utils';

const enhance = compose(
  usersHocs.queryGetProfile({ fetchPolicy: 'network-only' }),
  commonHocs.mutationReport(),
  usersHocs.mutationBlockUser(),
  friendsHocs.mutationRemoveFriend(),
  friendsHocs.mutationSendAcceptFriendRequest(),
  friendsHocs.mutationBlockFriendRequest(),
  friendsHocs.mutationCancelFriendRequest(),
  friendsHocs.queryGetFriendsList({ fetchPolicy: 'cache-and-network' }),
  albumsHocs.queryGetAlbumsPreview({ fetchPolicy: 'cache-and-network' }),
  albumsHocs.mutationRequestAlbumAccess(),

  withProps((props) => ({
    profile: R.pathOr({}, ['profile', 'profile'], props),
    albumsPreview: mapAlbumsPreview(props),
    totalPhotosCount: getTotalPhotosCount(props),
    friendsPreview: mapFriendsPreview(props),
    totalFriendsCount: getTotalFriendsCount(props)
  })),
  withHandlers({
    onShare: () => () => {
      const shareOptions = {
        title: 'Community A',
        message: 'Join me at Community A ',
        url: 'www.CommunityA.com',
        subject: 'Share Link' //  for email
      };

      Share.open(shareOptions)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          err && console.log(err);
        });
    },
    onGoToChat: (props) => () => {
      props.navigator.push(screens.Dialog, {
        passProps: {
          interlocutorId: props.profile.id
        }
      });
    },
    onGoToAlbums: ({ navigator, profile }) => () => {
      navigator.push(screens.AlbumsList, {
        passProps: {
          profileId: profile.id
        }
      });
    },
    onGoToAlbum: (props) => ({ id, isPrivate }) => {
      if (isPrivate) {
        albumsOperations.requestAlbumAccess({
          mutate: props.requestAlbumAccess,
          variables: { albumId: id }
        });
        return;
      }
      props.navigator.push(screens.Album, {
        passProps: {
          albumId: id
        }
      });
    },
    report: (props) => () => {
      commonOperations.report({
        mutate: props.report,
        variables: {
          item_id: props.profile.id,
          alert_type: REPORT_TYPE.ANGRY,
          item_type: REPORT_ITEM_TYPE.PROFILE,
          note: ''
        }
      });
    },
    onBlock: (props) => () => {
      usersOperations.blockUser({
        mutate: props.blockUser,
        variables: {
          targetProfileId: props.profile.id
        }
      });
    },
    onAddFriend: ({ sendAcceptFriendRequest, profile }) => () => {
      friendsOperations.sendAcceptFriendRequest({
        mutate: sendAcceptFriendRequest,
        friendName: profile.fullName,
        variables: {
          targetProfileId: profile.id
        }
      });
    },
    onRemoveFriend: ({ removeFriend, profile }) => () => {
      friendsOperations.removeFriend({
        mutate: removeFriend,
        friendName: profile.fullName,
        variables: {
          targetProfileId: profile.id
        }
      });
    },
    blockFriendRequest: ({ blockFriendRequest, profile }) => () => {
      friendsOperations.blockFriendRequest({
        mutate: blockFriendRequest,
        variables: {
          targetProfileId: profile.id
        }
      });
    },
    cancelFriendRequest: ({ cancelFriendRequest, profile }) => () => {
      friendsOperations.cancelFriendRequest({
        mutate: cancelFriendRequest,
        variables: {
          targetProfileId: profile.id
        }
      });
    },
    onGoToProfile: (props) => ({ id }) => {
      props.navigator.push(screens.Profile, {
        passProps: {
          id
        }
      });
    },
    onGoToFriends: (props) => () => {
      props.navigator.push(screens.FriendsList, {
        passProps: {
          profileId: props.profile.id
        }
      });
    }
  }),
  withActionSheet((props) => [
    {
      name: 'Report this user',
      handler: props.report
    },
    {
      name: 'Block this user',
      handler: props.onBlock
    },
    // {
    //   name: 'Share this profile',
    //   handler: props.onShare
    // },
    {
      name: I18n.t('messages.cancel'),
      handler: () => {}
    }
  ], {
    cancelButtonIndex: 3
  }),
);

export default hoistStatics(enhance)(Profile);
