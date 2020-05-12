import {
  compose,
  hoistStatics,
  withProps,
  branch,
  withHandlers,
  pure
} from 'recompose';
import R from 'ramda';

import {
  withRootSpinner,
  withTheme,
  withUploadPhoto,
  withActionSheet,
  withSetter,
  withPhotoSourceSelect
} from '@utils/enhancers';
import { screens } from '@constants';

import { albumsHocs, albumsOperations } from '../../modules/albums';
import { myProfileHocs } from '../../modules/myProfile';
import styles from './style';
import Album from './Album';

const enhance = compose(
  albumsHocs.queryGetAlbumFull({ fetchPolicy: 'cache-and-network' }),
  myProfileHocs.queryCurrentProfile({ fetchPolicy: 'cache-and-network' }),
  withProps((props) => ({
    album: R.path(['getAlbumFull', 'album'], props),
    myProfile: R.path(['currentProfile', 'currentProfile'], props),
    loading: {
      album: R.path(['getAlbumFull', 'loading'], props),
      myProfile: R.path(['currentProfile', 'loading'], props)
    }
  })),
  withHandlers({
    onOpenGallery: (props) => (index = 0) => () => {
      props.navigator.openModal(screens.Gallery, {
        passProps: {
          id: props.id,
          initIndex: index,
          albumId: props.album.id,
          type: 'album'
        }
      });
    }
  }),
  withRootSpinner(R.either(
    R.either(R.path(['loading', 'album']), R.propSatisfies(R.isNil, 'album')),
    R.path(['loading', 'myProfile']),
  )),
  withProps(({ myProfile, album: { mprofile = {} } }) => ({
    isMyAlbum: myProfile.id === mprofile.id
  })),
  branch(
    R.prop('isMyAlbum'),
    compose(
      albumsHocs.mutationAttachFileToAlbum(),
      albumsHocs.mutationRemoveImageFromAlbum(),
      withUploadPhoto((props, data) => {
        albumsOperations.attachFileToAlbum({
          mutate: props.attachFileToAlbum,
          variables: {
            fileId: R.path(['file', 'id'], data),
            albumId: R.path(['album', 'id'], props)
          }
        });
      }, 'uploadPhoto'),
      withPhotoSourceSelect({
        photoUploaderPropName: 'uploadPhoto'
      }),
      withSetter('selectedImage', null),
      withActionSheet((props) => [{
        name: 'Delete Photo',
        handler: () => {
          albumsOperations.removeImageFromAlbum({
            mutate: props.removeImageFromAlbum,
            variables: {
              albumId: props.album.id,
              imageId: props.selectedImage.id
            }
          });
        }
      }, {
        name: 'Cancel'
      }], {
        cancelButtonIndex: 1,
        destructiveButtonIndex: 0
      }, 'openImageOptions'),
      withHandlers({
        onOpenImageOptions: (props) => (image) => () => {
          props.setSelectedImage(image);
          props.openImageOptions();
        },
        onOpenEditAlbum: (props) => () => {
          props.navigator.push(screens.CreateEditAlbum, {
            passProps: { albumId: props.album.id }
          });
        }
      }),
    )
  ),
  withTheme(styles),
  pure,
);

export default hoistStatics(enhance)(Album);
