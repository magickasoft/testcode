import { compose, hoistStatics, withHandlers, withProps, pure, branch } from 'recompose';
import R from 'ramda';

import { screens } from '@constants';
import { withRootSpinner, withTheme } from '@utils/enhancers';
import { albumsHocs, albumsOperations } from '../../modules/albums';
import { myProfileHocs } from '../../modules/myProfile';
import AlbumsList from './AlbumsList';
import style from './style';

const myAlbumsEnhancer = compose(
  albumsHocs.mutationRemoveAlbum(),
  withHandlers({
    onCreateAlbum: props => () => {
      props.navigator.push(screens.CreateEditAlbum);
    },
    onSwipeablePress: props => album => index => {
      if (index === 0) {
        props.navigator.push(screens.CreateEditAlbum, {
          passProps: { albumId: album.id },
        });
      } else if (index === 1) {
        albumsOperations.removeAlbum({
          mutate: props.removeAlbum,
          albumTitle: album.title,
          variables: {
            id: album.id,
          },
          profileId: props.profile.id,
        });
      }
    },
  }),
);

const enhancer = compose(
  albumsHocs.queryGetAlbumsAndProfile({ fetchPolicy: 'cache-and-network' }),
  albumsHocs.mutationRequestAlbumAccess(),
  myProfileHocs.queryCurrentProfile({ fetchPolicy: 'cache-and-network' }),
  withProps(props => ({
    albums: R.pathOr([], ['getAlbumsAndProfile', 'albums'], props),
    profile: R.path(['getAlbumsAndProfile', 'profile'], props),
    myProfile: R.path(['currentProfile', 'currentProfile'], props),
    loading: {
      albums: R.path(['getAlbumsAndProfile', 'loading'], props),
      myProfile: R.path(['currentProfile', 'loading'], props),
    },
  })),
  withHandlers({
    toAlbum: ({ navigator, albums, requestAlbumAccess }) => (id) => () => {
      const album = albums.find(R.propEq('id', id));
      if (album && album.isPrivate) {
        albumsOperations.requestAlbumAccess({
          mutate: requestAlbumAccess,
          variables: { albumId: id },
        });
        return;
      }
      navigator.push(screens.Album, {
        passProps: { albumId: id },
      });
    },
  }),
  withRootSpinner(R.either(
    R.both(R.path(['loading', 'albums']), R.propSatisfies(R.isEmpty, 'albums')),
    R.both(R.path(['loading', 'myProfile']), R.propSatisfies(R.isNil, 'myProfile')),
  )),
  withProps(({ myProfile, profileId }) => ({
    isMyAlbums: myProfile.id === profileId,
  })),
  branch(
    R.prop('isMyAlbums'),
    myAlbumsEnhancer,
  ),
  pure,
  withTheme(style),
);

export default hoistStatics(enhancer)(AlbumsList);
