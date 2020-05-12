import R from 'ramda';
import I18n from 'react-native-i18n';

export const mapAlbumsPreview = R.pipe(
  R.pathOr([], ['getAlbumsPreview', 'profileAlbumsPreview', 'albumsPreview']),
  R.map(album => ({
    ...album,
    image: album.thumbImage || 'https://www.communitya.com/img/no_image.jpg',
  })),
);

export const getTotalPhotosCount =
  R.pathOr(0, ['getAlbumsPreview', 'profileAlbumsPreview', 'totalImages']);

export const mapFriendsPreview = R.pipe(
  R.pathOr([], ['getMyFriends', 'myFriendsList']),
  R.slice(0, 3),
  R.map(friend => ({
    id: friend.id,
    title: friend.fullName,
    subTitle: friend.mutualFriendsCount > 0
      ? `${friend.mutualFriendsCount} ${I18n.t('profile.mutual')}` : null,
    image: friend.photo,
  })),
);

export const getTotalFriendsCount = R.pipe(
  R.pathOr([], ['getMyFriends', 'myFriendsList']),
  R.length,
);
